const Banners = require('../../model/banners');


//! -------------- Delete banners of DB --------------------

const delBanners = async (req, res, next) => {
    try {
        const { selected } = req.body.data
        if (selected) {
            if (selected.length === 1) {
                await Banners.deleteMany({ _id: selected[0]._id })
                res.status(200).json({
                    status: "success",
                    message: "بنر با موفقیت حذف شد!"
                })
            }
            if (selected.length > 1) {
                selected.map(async item => {
                    await Banners.deleteMany({ _id: item._id })
                })
                res.status(200).json({
                    status: "success",
                    message: "بنر ها با موفقیت حذف شدند!!"
                })
            }
        }
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: "مشکلی در عملیات پیش آمده است!!"
        })
        console.log(err)
    }
}


module.exports = delBanners