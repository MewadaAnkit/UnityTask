const mongoose = require('mongoose');
const User = require('../Model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const AuthController = {


    //Register Controller function
    async register(req, res, next) {
        try {
            const hashedpassword = await bcrypt.hash(req.body.password, 10)
            const newUser = new User({
                ...req.body,
                password: hashedpassword

            });
            await newUser.save();
            res.status(200).json('Registered Successfully')

        } catch (err) {
            res.status(500).json(err)

        }
    },


    //login Controller function
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username, password });
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({ userId: user._id, userType: user.userType }, process.env.JWT_SECRET);
            
            res.cookie("access-token", token, {
                httpOnly: true,
             }).status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = AuthController;







