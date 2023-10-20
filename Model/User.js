const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ['buyer', 'seller'],
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  try {
    if (this.userType === 'seller') {
      const Seller = mongoose.model('Seller');
      await Seller.create({ userId: this._id , username:this.username });
    }
    next();
  } catch (error) {
    next(error);
  }
});
const User =mongoose.model('User', userSchema);
module.exports = User;
