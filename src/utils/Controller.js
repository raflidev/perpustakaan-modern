const User = require("../db/model/User")

exports.index = (req,res) => {
    res.send("hello world")
}

exports.user = async (req,res) => {
    res.json(await User.find().select('-password -__v'))
}

exports.userPost = (req,res) => {
    try{
        const dataUser = new User(req.body)
        dataUser.save()
    }catch(err){
        console.log({message: err});
    }
}