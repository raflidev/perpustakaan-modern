const express = require('express')
const router = express.Router()
const Controller = require('../utils/Controller')
const User = require('../utils/Controller/User')
const Book = require('../utils/Controller/Book')
const Borrow = require('../utils/Controller/Borrow')
const Login = require('../utils/Controller/Login')

router.get('/', Controller.index)
router.get('/user', User.read)
router.post('/user', User.create)
router.put('/user/:id', User.update)
router.delete('/user/:id', User.delete)
router.get('/user/:id', User.find)


router.get('/book', Book.read)
router.post('/book', Book.create)
router.put('/book/:id', Book.update)
router.delete('/book/:id', Book.delete)
router.get('/book/:id', Book.find)


router.get('/borrow', Borrow.read)
router.post('/borrow', Borrow.create)
router.put('/borrow/:id', Borrow.update)
router.delete('/borrow/:id', Borrow.delete)
router.get('/borrow/:id', Borrow.find)

router.post('/login', Login.tryLogin)



module.exports = router