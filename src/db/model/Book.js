const mongoose = require("mongoose")

const Book = new mongoose.Schema({
    name: String,
    author: String
})

module.exports = mongoose.model('book',Book)