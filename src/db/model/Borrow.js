const mongoose = require("mongoose")

const Borrow = new mongoose.Schema({
    user_id:String,
    book_id:String,
    createAt: { type : Date, default: Date.now }
})

module.exports = mongoose.model('borrow',Borrow)