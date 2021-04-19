const express = require('express')
const router = express.Router()
const Controller = require('../utils/Controller')

router.get('/', Controller.index)
router.get('/user', Controller.user)
router.post('/user', Controller.userPost)

module.exports = router