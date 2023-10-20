const Seller = require('../Model/Seller')
const Order = require('../Model/Order')
const Catalog = require('../Model/catalog')
const SellerController = {

    //Controller method to create catalog 
     async CreateCatalog(req,res){
        const { products } = req.body;
        try {
          const seller = await Seller.findOne({ userId: req.user.userId });
          if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
          }
          const catalog = new Catalog({ sellerId: seller._id, products });
          await catalog.save();
          res.status(201).json({ message: 'Catalog created successfully' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
     },




     //Controller for checking orders for particular seller
     async CheckOrders(req,res){
        try {
            const seller = await Seller.findOne({ userId: req.user.userId });
            if (!seller) {
              return res.status(404).json({ message: 'Seller not found' });
            }
            const orders = await Order.find({ sellerId: seller._id });
            res.status(200).json(orders);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
     },
    
}

module.exports = SellerController;