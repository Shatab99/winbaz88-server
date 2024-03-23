const express = require('express')
const router = express.Router()

const gameController = require("../Controllers/gameController")

router.patch('/wheelgame', gameController.updateUserByWheel)


module.exports = router