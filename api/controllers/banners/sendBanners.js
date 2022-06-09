const Banners = require('../../model/banners');

//! ---------------- Get all banners of DB and send to client ------------

const sendBanners = async (req, res, next) => {
    const allBanners = await Banners.find()
    res.status(200).json({
        message: "success",
        data: allBanners
    })
}



module.exports = sendBanners