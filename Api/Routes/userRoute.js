const express = require('express')
const router = express.Router()
const userController = require("../Controllers/userController")

router.get('/users', userController.getAllUser )
router.get('/adminPhone/:id', userController.getAdminPhone )
router.get('/users/:email', userController.getUserByEmail )
router.post('/user', userController.createUser)
router.patch('/updateCred/:email', userController.upadateCred)
router.patch('/withdrawCred/:email', userController.withdrawCred)
router.patch('/updatePhone/:email', userController.updatePhone)
router.patch('/updateAdminPhone', userController.updateAdminPhone)
router.delete('/deleteUser/:id', userController.createUser)

module.exports = router

