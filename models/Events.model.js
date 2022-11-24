const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const eventSchema = new Schema(
    {
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

        title: {
            type: String,
            required: [true, "Please introduce the title"],
        },
        typeOfEvent: {
            type: String,
            required: [true, "Type of event is required"],
            enum: ["Party", "Concert", "Join a Band", "Hiring a Member", "Jamming"
            ]
        },

        style: {
            type: String,
            enum: ["Dance", "Folk", "Bachata", "Rock", "Reggaeton", "Rap", "Flamenco", "Classic", "Tango", "Indie","Trap", "Pop", "Electronic", "Blues", "Punk", "Jazz", "Techno", "Choir", "Trance",]
        },

        instruments: {
            type: String,
            enum: ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
                'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']
        },

        picture: {
            type: String,
        },

        phoneNumber: {
            type: String,
        },

        description: {
            type: String,
        },

        price: {
            type: Number,
            required: true
        },

        date: {
            type: Date,
            required: [true, "Date is required."],
        },

        coordinate: {
            type: Array,
            default: []
        },


    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Event = model("Event", userSchema);

module.exports = Event;