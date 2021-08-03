const mongoose = require("mongoose")

const History = new mongoose.Schema({
    user_id: String,
    book_id: String,
    borrow: Date,
    finishBorrow: Date,
    createAt: { type : Date, default: Date.now }
})

module.exports = mongoose.model('History',History)