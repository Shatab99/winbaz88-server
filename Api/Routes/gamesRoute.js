const express = require('express')
const router = express.Router()

const gameController = require("../Controllers/gameController")

router.patch('/wheelgame', gameController.updateUserByWheel)
router.patch('/aviatorgame', gameController.updateUserByAviator)


module.exports = router