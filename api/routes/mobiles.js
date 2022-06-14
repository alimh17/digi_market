const express = require("express")
// const validator = require('express-joi-validation').createValidator({})
const mobilesController = require('../controllers/mobiles/mobilesController');
// const mobileValidate = require("../utils/mobileValidate");

const route = express.Router()

route.post('/mobile', mobilesController.getMobile)

module.exports = route