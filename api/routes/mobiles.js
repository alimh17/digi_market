const express = require("express")
const mobilesController = require('../controllers/mobiles/mobilesController');

const route = express.Router()

route.post('/mobile', mobilesController.getMobile)

module.exports = route