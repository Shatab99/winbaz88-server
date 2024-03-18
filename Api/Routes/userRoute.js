const express = require('express')
const router = express.Router()
const userController = require("../Controllers/userController")

router.get('/users', userController.getAllUser )
router.post('/user', userController.createUser)

module.exports = router

