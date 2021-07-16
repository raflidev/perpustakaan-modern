const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: String,
    full_name: String,
    valid:Boolean,
    email: String,
    password: String,
    role: { type: Boolean, default: false },
})

module.exports = mongoose.model('user',User)