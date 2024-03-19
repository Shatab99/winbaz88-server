const express = require('express')
const router = express.Router()
const userController = require("../Controllers/userController")

router.get('/users', userController.getAllUser )
router.get('/users/:email', userController.getUserByEmail )
router.post('/user', userController.createUser)
router.delete('/deleteUser/:id', userController.createUser)

module.exports = router

