const History = require("../../db/model/History")

exports.read = (req,res) => {
    History.find().then(history => {
        res.status(200).json(history)
    })
    .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occured",
        }); 
      });
}

exports.create = (req,res) => {
    try{
        const dataHistory = new History({
            user_id: req.body.user_id,
            book_id: req.body.book_id,
            borrow: req.body.borrow,
            finishBorrow: req.body.finishBorrow,
        })
        dataHistory.save().then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).send({
              message: err.message || "Some error occurred while creating the History.",
            });
          });
    }catch(err){
        console.log({message: err});
    }
}

exports.delete = (req,res) => {
    try{
        History.findByIdAndRemove(req.params.id)
        .then(history => {
            if (!history){
                return res.status(404).send({
                    message: "history not found ",
                  });
            }
            res.send({ message: "history deleted successfully!" });
        })
    }catch(err) {
        return res.status(500).send({
            message: "Could not delete history",
          });
    }
}

exports.find = (req,res) => {
    try{
        History.findById(req.params.id)
        .then(history => {
            if (!history) {
                return res.status(404).send({
                  message: "history not found with id " + req.params.id,
                });
              }
              res.status(200).send(history);
        })
    }catch(err) {
        return res.status(500).send({
            message: "Error retrieving history with id " + req.params.id,
          });
    }
}

exports.update  = (req,res) => {
    if (!req.body.book_id || !req.body.user_id  || !req.body.borrow || !req.body.finishBorrow) {
        res.status(400).send({
          message: "required fields cannot be empty",
        });
      }

    History.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((history) => {
      if (!history) {
        return res.status(404).send({
          message: "no history found",
        });
      }
      res.status(200).send(history);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
}