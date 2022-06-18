const _ = require('lodash');
const { mongoose } = require('mongoose');

const { mobileValidate } = require('../../utils/mobileValidate');
const Mobiles = require('../../model/mobile/mobile');
const { pathMobiles } = require('../../utils/pathImageProduct');


const receveMobile = async (req, res, next) => {
    try {
        if (req.body) {
            const { error, value } = mobileValidate.validate(req.body, { abortEarly: false })

            if (error) {
                const message = error.details.map(item => item.message)
                return res.status(500).json({
                    status: "failed",
                    message
                })
            } else {
                const { name, price, screen, brand, network, ram, dimensions, weight, simcart, color, body, features } = value
                const image = req.files.image
                const mobiles = await Mobiles.findOne()

                //! ------------------ save many image ----------------
                const path = pathMobiles(image)

                if (mobiles) {
                    const sampleMobiles = [...mobiles.mobiles]
                    sampleMobiles.push({
                        name, price, screen, brand, network, ram, dimensions, weight, simcart, color, body, features, images: path
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
                                screen,
                                brand,
                                network,
                                ram,
                                dimensions,
                                weight,
                                simcart,
                                color,
                                body,
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
        }

    } catch (err) {
        next(err)
    }

}




module.exports = receveMobile