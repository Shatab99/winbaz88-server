const express = require('express');
const router = express.Router()


const Refer = require("../Controllers/referController")

router.post('/postRefer', Refer.postRefer)
router.get('/refers', Refer.getAllRefer)
router.get('/refer/:referId', Refer.getReferedUsers)

module.exports = router

