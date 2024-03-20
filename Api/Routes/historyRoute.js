const express = require('express')
const router = express.Router()

const History = require("../Controllers/historyController")

router.get('/history/:email', History.getHistoryUser)
router.post('/postHistory', History.postHistory )

module.exports = router