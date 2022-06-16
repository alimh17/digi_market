const express = require("express")
const mobilesController = require('../controllers/mobiles/mobilesController');

const route = express.Router()

route.post('/mobile', mobilesController.receveMobile)
route.get("/get_mobiles", mobilesController.allMobiles)

module.exports = route