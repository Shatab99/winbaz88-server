const express = require('express')
const router = express.Router()

const depositController = require("../Controllers/depositController")

router.get('/Deposits', depositController.getAllDeposit)
router.post('/submitDeposit', depositController.submitDeposit)
router.delete('/deleteDeposit/:id', depositController.deleteDeposit)
router.get('/userDeposits/:email', depositController.getDepositUser)

module.exports = router