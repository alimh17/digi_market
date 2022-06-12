const mongoose = require('mongoose');
const Banner = require('../../model/banners/midBanner');
const delBanners = require('../../utils/delBanners');

const midBanner = async (req, res, next) => {

    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        } else {
            const banner = req.files.banner
            const name = banner.name.replace(/\s+/g, '')
            const folder = `public/images/banners/mid_banner/`
            delBanners(folder)

            banner.mv(`${folder + name}`)


            await Banner.deleteMany({})
            //! ------------------- create new Object ------------------
            const newBanner = await Banner.create({
                _id: new mongoose.Types.ObjectId(),
                name,
                type: banner.mimetype,
                size: banner.size,
                path: `http://localhost:${process.env.PORT_API}/images/banners/mid_banner/${name}`
            })
            await newBanner.save().then(() => {
                //! ----------------- send success response ----------------

                res.status(201).json({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        _id: new mongoose.Types.ObjectId(),
                        name,
                        type: banner.mimetype,
                        size: banner.size,
                        path: `http://localhost:${process.env.PORT_API}/images/banners/mid_banner/${name}`
                    }
                })
            }).catch(err => {

                res.status(500).json({
                    status: false,
                    message: "expected name to be unique"
                })
            })

            console.log(banner)
            res.send("receved")
        }
    } catch (err) {
        console.log(err)
    }


}



module.exports = midBanner
