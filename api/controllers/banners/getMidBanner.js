
const Banner = require('../../model/midBanner');


const getMidBanner = async (req, res, next) => {

    try {
        const banner = await Banner.find({})

        res.status(200).json({
            status: 200,
            message: "success",
            data: banner[0]
        })
        res.send("success")

    } catch (err) {
        console.log(err)
    }

}

module.exports = getMidBanner