const express = require('express');
const router = express.Router()
const BuyerController = require('../Controller/buyerController')
const authenticateUser = require('../middlewares/authentication')

//Buyer  routes

//route for getting list of seller
router.get('/api/buyer/list-of-sellers' , authenticateUser,BuyerController.getSellers)

//route for  getting catalog for particular seller
router.get('/api/buyer/seller-catalog/:seller_id', authenticateUser ,BuyerController.SellerCatalog )


//route for creation of order
router.post('/api/buyer/create-order/:seller_id', authenticateUser ,BuyerController.CreateOrder)

module.exports = router;