const { Schema, model } = require('mongoose')

const favoriteSchema = (
    {
        user: {
            type: Schema.Types.ObjectId, ref:"User",
        },

        classes: {
            type: Schema.Types.ObjectId, ref:"Classes",
        }
    }
)

const Favorite = model('Favorite', favoriteSchema)

module.exports = Favorite;