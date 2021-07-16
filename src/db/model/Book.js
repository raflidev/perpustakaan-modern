const mongoose = require("mongoose")

const Book = new mongoose.Schema({
    name: String,
    author: String,
    createAt: { type : Date, default: Date.now }
})

module.exports = mongoose.model('book',Book)