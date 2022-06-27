const Joi = require('joi');

const mobileValidate = Joi.object({
    name: Joi.string()
        .required()
        .min(4).message("نام موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(255).message("نام موبایل نمیتواند بیشتر از 255 کاراکتر باشد"),
    price: Joi.string()
        .required()
        .min(4).message("قیمت موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(9).message("قیمت موبایل نمیتواند بیشتر از 9 کاراکتر باشد"),
    screen: Joi.string()
        .required()
        .min(4).message("اندازه صفحه موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(60).message("اندازه صفحه موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    brand: Joi.string()
        .required()
        .min(2).message("برند موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("برند موبایل نباید بیشتر از 60 کاراکتر باشد"),
    image: Joi.any().required(),
    mainImage: Joi.any().required(),
    network: Joi.string()
        .required()
        .min(2).message("شبکه نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("شبکه نباید بیشتر از 60 کاراکتر باشد"),
    ram: Joi.string()
        .required()
        .min(2).message("رم موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("رم موبایل نباید بیشتر از 60 کاراکتر باشد"),
    dimensions: Joi.string()
        .required()
        .min(2).message("ابعاد موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("ابعاد موبایل نباید بیشتر از 60 کاراکتر باشد"),
    weight: Joi.string()
        .required()
        .min(2).message("وزن موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("وزن موبایل نباید بیشتر از 60 کاراکتر باشد"),
    color: Joi.string()
        .required()
        .min(2).message("رنگ موبایل نمیتواند کمتر از 2 کاراکتر باشد")
        .max(60).message("رنگ موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    simcart: Joi.string()
        .required()
        .min(2).message("سیمکارت موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("سیمکارت موبایل نباید بیشتر از 60 کاراکتر باشد"),
    body: Joi.string()
        .min(4).message("بدنه موبایل نمیتواند کمتر از 8 کاراکتر باشد")
        .max(500).message("بدنه موبایل نمیتواند بیشتر از 500 کاراکتر باشد"),
    features: Joi.string()
        .min(4).message("ویژگی موبایل نمیتواند کمتر از 8 کاراکتر باشد")
        .max(500).message("ویژگی موبایل نمیتواند بیشتر از 500 کاراکتر باشد")
})


const laptopValdidate = Joi.object({
    name: Joi.string()
        .required()
        .min(4).message("نام موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(255).message("نام موبایل نمیتواند بیشتر از 255 کاراکتر باشد"),
    price: Joi.string()
        .required()
        .min(4).message("قیمت موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(9).message("قیمت موبایل نمیتواند بیشتر از 9 کاراکتر باشد"),
    screen: Joi.string()
        .required()
        .min(4).message("اندازه صفحه موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(60).message("اندازه صفحه موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    brand: Joi.string()
        .required()
        .min(2).message("برند موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("برند موبایل نباید بیشتر از 60 کاراکتر باشد"),
    weight: Joi.string()
        .required()
        .min(2).message("وزن موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("وزن موبایل نباید بیشتر از 60 کاراکتر باشد"),
    color: Joi.string()
        .required()
        .min(2).message("رنگ موبایل نمیتواند کمتر از 2 کاراکتر باشد")
        .max(60).message("رنگ موبایل نمیتواند بیشتر از 60 کاراکتر باشد"),
    image: Joi.any().required(),
    mainImage: Joi.any().required(),
    dimensions: Joi.string()
        .required()
        .min(2).message("ابعاد موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("ابعاد موبایل نباید بیشتر از 60 کاراکتر باشد"),
    cpu_series: Joi.string()
        .required()
        .min(2).message("شبکه نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("شبکه نباید بیشتر از 60 کاراکتر باشد"),
    cpu_model: Joi.string()
        .required()
        .min(2).message("شبکه نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("شبکه نباید بیشتر از 60 کاراکتر باشد"),
    ram: Joi.string()
        .required()
        .min(2).message("رم موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("رم موبایل نباید بیشتر از 60 کاراکتر باشد"),
    ram_type: Joi.string()
        .required()
        .min(2).message("رم موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("رم موبایل نباید بیشتر از 60 کاراکتر باشد"),
    gpu_maker: Joi.string()
        .required()
        .min(2).message("سیمکارت موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("سیمکارت موبایل نباید بیشتر از 60 کاراکتر باشد"),
    cpu_maker: Joi.string()
        .required()
        .min(2).message("سیمکارت موبایل نباید کمتر از 2 کاراکتر باشد")
        .max(60).message("سیمکارت موبایل نباید بیشتر از 60 کاراکتر باشد"),
    detail: Joi.string()
        .min(4).message("بدنه موبایل نمیتواند کمتر از 8 کاراکتر باشد")
        .max(700).message("بدنه موبایل نمیتواند بیشتر از 700 کاراکتر باشد"),
})


module.exports = {
    mobileValidate,
    laptopValdidate
}