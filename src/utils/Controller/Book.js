const Book = require("../../db/model/Book")

exports.create = (req,res) => {
    const dataBook = new Book({
        name: req.body.name,
        author: req.body.author
    })

    dataBook.save().then(book => {
        res.status(200).send(book)
    }).catch(err => {
        res.status(500).send({message: err.message})
    })
}

exports.read = (req,res) => {
    Book.find().then(book => {
        res.status(200).json(book)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.find = (req,res) => {
    Book.findById(req.params.id)
    .then(book => {
        if (!book){
            return res.status(404).json({
                message: "Book not found with id " + req.params.id,
            })
        }
        res.status(200).json(book)
    }).catch(err => {
        res.status(500).json({message: err.message})
    })
}

exports.update = (req,res) => {
    if (!req.body.name || !req.body.author){
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(book => {
        if (!book) {
            return res.status(404).send({
              message: "no book found",
            });
          }
          res.status(200).send(book);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
}

exports.delete = (req,res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(book => {
        if(!book){
            return res.status(404).send({
                message: "User not found "
            })
        }
        res.send({ message: "Book deleted successfully!" });
    })
}