const dotenv = require('dotenv').config()
const express = require('express')
const app = express();
const Port = process.env.PORT || 3000

//database connection
const DB = require('./Model/connection')

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Routes
app.use(require('./Routes/authroutes'))
app.use(require('./Routes/buyerRoutes'))
app.use(require('./Routes/SellerRoutes'))



//server listener
app.listen(Port , ()=>{
    console.log('Server Started Successfully at Port 3000')
})