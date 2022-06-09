const express = require('express');

const bannerController = require('../controllers/banners/bannerController')

const router = express.Router();


router.post('/banner', bannerController.bannerFile)
router.post('/del_banners', bannerController.delBanners)
router.get("/all_banners", bannerController.sendBanners)


module.exports = router