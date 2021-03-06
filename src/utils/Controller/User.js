const User = require("../../db/model/User")

exports.read = (req,res) => {
    User.find().then(user => {
        res.status(200).json(user)
    })
    .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occured",
        }); 
      });
}

exports.create = (req,res) => {
    try{
        User.find({username:req.body.username}).then(user => {
          User.find({email:req.body.email}).then((email) => {
            if(user.length == 0 && email.length == 0){
              const dataUser = new User({
                  username: req.body.username,
                  full_name: req.body.full_name,
                  email: req.body.email,
                  valid: req.body.valid,
                  password: req.body.password,
                  role: req.body.role
              })
              dataUser.save().then(data => {
                  res.json(data)
              }).catch((err) => {
                  res.status(500).send({
                    message: "Username or email has been registred.",
                  });
                });
            } else {
              res.status(500).send({
                message: "Username has been registred.",
              });
            }
          })
        })
    }catch(err){
        console.log({message: err});
    }
}

exports.delete = (req,res) => {
    try{
        User.findByIdAndRemove(req.params.id)
        .then(user => {
            if (!user){
                return res.status(404).send({
                    message: "User not found ",
                  });
            }
            res.send({ message: "User deleted successfully!" });
        })
    }catch(err) {
        return res.status(500).send({
            message: "Could not delete user ",
          });
    }
}

exports.find = (req,res) => {
    try{
        User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                  message: "User not found with id " + req.params.id,
                });
              }
              res.status(200).send(user);
        })
    }catch(err) {
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.id,
          });
    }
}

exports.update  = (req,res) => {

    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
}