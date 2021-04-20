const Borrow = require("../../db/model/Borrow")

exports.create = (req,res) => {
    const dataBorrow = new Borrow({
        user_id: req.body.user_id,
        book_id: req.body.book_id
    })

    dataBorrow.save().then(borrow => {
        res.status(200).send(borrow)
    }).catch(err => {
        res.status(500).send({message: err.message})
    })
}

exports.read = (req,res) => {
    Borrow.find().then(borrow => {
        res.status(200).json(borrow)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.find = (req,res) => {
    Borrow.findById(req.params.id)
    .then(borrow => {
        if (!borrow){
            return res.status(404).json({
                message: "Borrow not found with id " + req.params.id,
            })
        }
        res.status(200).json(borrow)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.update = (req,res) => {
    if (!req.body.user_id || !req.body.book_id){
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    Borrow.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(borrow => {
        if (!borrow) {
            return res.status(404).send({
              message: "no Borrow found",
            });
          }
          res.status(200).send(borrow);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
}

exports.delete = (req,res) => {
    Borrow.findByIdAndDelete(req.params.id)
    .then(borrow => {
        if(!borrow){
            return res.status(404).send({
                message: "User not found "
            })
        }
        res.send({ message: "Borrow deleted successfully!" });
    })
}