const User = require("../../db/model/User")

exports.tryLogin = (req,res) => {
    User.find({email: req.body.email, password: req.body.password}).then(user => {
        res.status(200).send(user)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
}