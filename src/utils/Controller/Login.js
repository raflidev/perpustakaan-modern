const User = require("../../db/model/User")
const jwt = require("jsonwebtoken");
require("dotenv/config")

exports.tryLogin = (req,res) => {
    User.find({email: req.body.email, password: req.body.password}).then(user => {
        res.status(200).json({
            "token": jwt.sign(JSON.stringify(user), process.env.JWT_SECRET),
            "message": 'berhasil login'
        })
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.verifyToken = (req,res) => {
    res.status(200).json({
        "user": jwt.verify(req.body.token, process.env.JWT_SECRET),
        "message": "token berhasil divefikasi"
    })
}