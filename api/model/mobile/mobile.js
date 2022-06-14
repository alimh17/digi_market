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
            brand: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            },
            features: {
                type: String,
                required: true
            },
            images: [
                {
                    type: String,
                    required: true
                }
            ]
        }
    ]
})


module.exports = mongoose.model("mobiles", mobilesSchema)