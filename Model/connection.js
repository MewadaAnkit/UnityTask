const mongoose = require('mongoose');

mongoose.connect(process.env.DB ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connected to Database successfully')
}).catch((err)=>console.log(err))

module.exports = require;