const express = require('express')
const router = express.Router()
const Controller = require('../utils/Controller')
const User = require('../utils/Controller/User')
const Book = require('../utils/Controller/Book')
const Borrow = require('../utils/Controller/Borrow')
const Login = require('../utils/Controller/Login')
const History = require('../utils/Controller/History')

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


router.get('/history', History.read)
router.post('/history', History.create)
router.put('/history/:id', History.update)
router.delete('/history/:id', History.delete)
router.get('/history/:id', History.find)
router.get('/history/user/:id', History.user)


router.get('/borrow', Borrow.read)
router.post('/borrow', Borrow.create)
router.put('/borrow/:id', Borrow.update)
router.delete('/borrow/:id', Borrow.delete)
router.get('/borrow/:id', Borrow.find)
router.get('/borrow/user/:id', Borrow.user)
router.get('/borrow/:book/user/:user', Borrow.check)

router.post('/login', Login.tryLogin)
router.post('/veriftoken', Login.verifyToken)



module.exports = router