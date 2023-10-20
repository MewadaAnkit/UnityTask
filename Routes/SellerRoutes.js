const express = require('express');
const router = express.Router()
const SellerController = require('../Controller/sellerController')

const authenticateUser = require('../middlewares/authentication');

//Seller routes

//route for creation of catalog
router.post('/api/seller/create-catalog', authenticateUser , SellerController.CreateCatalog);

//route for check orders
router.get('/api/seller/orders' , authenticateUser, SellerController.CheckOrders)


module.exports = router;