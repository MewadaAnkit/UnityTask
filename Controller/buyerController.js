const Seller = require('../Model/Seller')
const Catalog = require('../Model/catalog')
const BuyerController = {
    async getSellers(req, res) {
        try {
            const sellers = await Seller.find();
            console.log(sellers)
            res.status(200).json(sellers);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
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
    async CreateOrder(req, res) {
        const { seller_id } = req.params;
        const { products } = req.body;
        try {
            // Validate products, user, and seller
            // Implement logic to create an order in the database
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