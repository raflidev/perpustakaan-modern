const mongoose = require("mongoose")
const moment = require("moment")

const Borrow = new mongoose.Schema({
    user_id: String,
    book_id: String,
    createAt: { type : Date, default: Date.now },
    finishBorrow: {type: Date, default: moment(new Date()).add(7, 'days')}
})

module.exports = mongoose.model('borrow',Borrow)