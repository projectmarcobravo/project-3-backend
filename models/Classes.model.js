const { Schema, model } = require('mongoose')

const classesSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        
        instruments: {
            type: String,
            required: true,
            enum: ['-', 'DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
                'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']
        },

        picture: {
            type: String,
            default: ""
        },

        price: {
            type: Number,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        creator: {
            type: Schema.Types.ObjectId, ref: 'User'
        },

        favorite: {
            type: Schema.Types.ObjectId, ref:"Favorite",
        },

        address: {
            type: String,
            default: ""
        },

        level: {
            type: String,
            required: true,
            enum: ['-', 'Beginner', 'Intermediate', 'Advanced']
        }
    },

    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)


const Classes = model('Classes', classesSchema)

module.exports = Classes;

