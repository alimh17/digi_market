const express = require('express');

const bannerController = require('../controllers/banners/bannerController')

const router = express.Router();


router.post('/banner', bannerController.bannerFile)


module.exports = router