const express = require('express');
const router = express.Router()
const BuyerController = require('../Controller/buyerController')
const authenticateUser = require('../middlewares/authentication')

//Buyer  routes

router.get('/api/buyer/list-of-sellers' , authenticateUser,BuyerController.getSellers)

router.get('/api/buyer/seller-catalog/:seller_id', authenticateUser ,BuyerController.SellerCatalog )

router.post('/api/buyer/create-order/:seller_id', authenticateUser ,BuyerController.CreateOrder)

module.exports = router;