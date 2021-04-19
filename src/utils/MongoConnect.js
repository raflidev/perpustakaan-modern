const mongoose = require('mongoose')
require("dotenv/config")
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}, (req,res) => {
    console.log("connected to database");
});

module.exports = mongoose