const dotenv = require('dotenv').config()
const express = require('express')
const app = express();
const Port = process.env.PORT || 3000
const DB = require('./Model/connection')
app.get('/',(req,res)=>{
    res.send('hello from server')
})



app.listen(Port , ()=>{
    console.log('Server Started Successfully at Port 3000')
})