const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: String,
    full_name: String,
    valid:Boolean,
    email: String,
    password: String
})

module.exports = mongoose.model('user',User)