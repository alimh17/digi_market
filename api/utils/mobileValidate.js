const Joi = require('joi');

const mobileValidate = Joi.object({
    name: Joi.string()
        .required()
        .min(4).message("نام موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(255).message("نام موبایل نمیتواند بیشتر از 255 کاراکتر باشد"),
    price: Joi.string()
        .required()
        .min(4).message("قیمت محصول نباید کمتر از 4 کاراکتر باشد")
        .max(9).message("قیمت محصول نمیتواند بیشتر از 9 کاراکتر باشد"),
    brand: Joi.string()
        .required()
        .min(2).message("برند موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("برند موبایل نباید بیشتر از 60 کاراکتر باشد"),
    color: Joi.string()
        .required()
        .min(2).message("رنگ موبایل نمیتواند کمتر از 2 کاراکتر باشد")
        .max(60).message("رنگ موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    features: Joi.string()
        .required()
        .min(12).message("ویژگی موبایل نمیتواند کمتر از 12 کاراکتر باشد")
        .max(500).message("ویژگی موبایل نمیتواند بیشتر از 500 کاراکتر باشد")
})


module.exports = mobileValidate