const User = require("../../db/model/User")
const jwt = require("jsonwebtoken");
require("dotenv/config")

exports.tryLogin = (req,res) => {
    User.find({email: req.body.email, password: req.body.password}).then(user => {
        res.status(200).json({
            "token": jwt.sign({
                "role":user[0].role,
                "_id":user[0]._id,
                "username":user[0].username,
                "full_name":user[0].full_name,
                "email":user[0].email,
                "valid":user[0].valid,
                "password":user[0].password,
                "__v":user[0].__v,
            }, process.env.JWT_SECRET, {
                expiresIn: "4h"
            }),
            "message": 'berhasil login'
        })
    }).catch(err => {
        res.send({message: err.message})
    })
}

exports.verifyToken = (req,res) => {
    try {
        res.status(200).json({
            "user": jwt.verify(req.body.token, process.env.JWT_SECRET),
            "message": "token berhasil divefikasi"
        })   
    } catch (error) {
        res.status(500).json({
            "message": "token expired"
        })
    }
}