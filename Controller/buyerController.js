const Seller = require('../Model/Seller')
const Catalog = require('../Model/catalog')
const Order = require('../Model/Order')
const BuyerController = {

    //controller for getting the list of sellers
    async getSellers(req, res) {
        try {
            const sellers = await Seller.find();
            console.log(sellers)
            res.status(200).json(sellers);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    //Controller for checking the catalog for particular seller
    async SellerCatalog(req, res) {
        const { seller_id } = req.params;
        try {
            const catalog = await Catalog.findOne({ sellerId: seller_id });
            if (!catalog) {
                return res.status(404).json({ message: 'Catalog not found for this seller' });
            }
            res.status(200).json(catalog.products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    //controller method for creating order for particular seller
    async CreateOrder(req, res) {

        const { seller_id } = req.params;

        //I am saving product as an array inside that i am taking name and price inside an object
        const { products } = req.body;
        try {
            
            const order = new Order({
                buyerId: req.user.userId,
                sellerId: seller_id,
                products: products,
            });
            await order.save();
            res.status(201).json({ message: 'Order created successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = BuyerController;