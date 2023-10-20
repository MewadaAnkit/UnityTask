const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  username:{
    type:String,
    required:true
  }
  // Other seller-related fields
});

const Seller = mongoose.model('Seller',sellerSchema)
module.exports = Seller;
