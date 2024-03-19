const express = require('express')
const router = express.Router()

const depositController = require("../Controllers/depositController")

router.get('/Deposits', depositController.getAllDeposit)
router.post('/submitDeposit', depositController.submitDeposit)
router.delete('/deleteDeposit/:id', depositController.deleteDeposit)

module.exports = router