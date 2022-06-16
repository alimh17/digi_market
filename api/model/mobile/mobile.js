const { mongoose, Schema } = require('mongoose');

const mobilesSchema = new Schema({
    mobiles: [
        {
            name: {
                type: String,
                required: true,
                unique: true,
            },
            price: {
                type: String,
                required: true
            },
            screen: {
                type: String,
                required: true
            },
            brand: {
                type: String,
                required: true
            },
            images: [
                {
                    type: String,
                    required: true
                }
            ],
            network: {
                type: String,
                required: true
            },
            ram: {
                type: String,
                required: true
            },
            dimensions: {
                type: String,
                required: true
            },
            weight: {
                type: String,
                required: true
            },
            simcart: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            },
            body: {
                type: String,
                required: true
            },
            features: {
                type: String,
                required: true
            },
        }
    ]
})


module.exports = mongoose.model("mobiles", mobilesSchema)