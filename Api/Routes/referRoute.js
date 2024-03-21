const express = require('express');
const router = express.Router()


const Refer = require("../Controllers/referController")

router.post('/postRefer', Refer.postRefer)
router.get('/refers', Refer.getAllRefer)
router.delete('/referdel', Refer.deleteAllRef)

module.exports = router

