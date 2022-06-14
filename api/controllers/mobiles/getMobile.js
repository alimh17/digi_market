const _ = require('lodash');
const { mongoose } = require('mongoose');

const Mobiles = require('../../model/mobile/mobile');
const { mkMobileDir } = require('../../utils/mkDir');
const mobileValidate = require('../../utils/mobileValidate');
const { pathMobiles } = require('../../utils/pathImageProduct');
const { saveMobilesImage } = require('../../utils/saveProductImages');


const getMobile = async (req, res, next) => {
    try {
        const { error, value } = mobileValidate.validate(req.body, { abortEarly: false })
        if (error) {
            const message = error.details.map(item => item.message)
            console.log(message)
            res.send("failed")
        } else {
            const { name, price, color, brand, features } = value
            const image = req.files.image
            const mobiles = await Mobiles.findOne()

            //! ------------------ save many image ----------------
            const path = pathMobiles(image)

            if (mobiles) {
                const sampleMobiles = [...mobiles.mobiles]
                sampleMobiles.push({
                    name, price, color, brand, features, images: path
                })
                const uniq = _.uniqBy(sampleMobiles, 'name')
                await Mobiles.findByIdAndUpdate(mobiles._id, {
                    "$set": { mobiles: uniq }
                })
                return res.status(201).json({
                    status: "success",
                    message: "موبایل با موفقیت اضافه شد"
                })
            } else {
                const mobile = await Mobiles.create({
                    mobiles: [
                        {
                            _id: new mongoose.Types.ObjectId(),
                            name,
                            price,
                            brand,
                            color,
                            features,
                            images: path
                        }
                    ]
                })
                await mobile.save(err => {
                    if (err) throw err
                    return res.status(201).json({
                        status: "success",
                        message: "موبایل با موفقیت اضافه شد"
                    })
                })
            }
        }
    } catch (err) {
        next(err)
    }

}




module.exports = getMobile