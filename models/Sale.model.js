const { Schema, model } = require("mongoose");

const saleSchema = new Schema({
    creator:{ type: Schema.Types.ObjectId, ref: 'User'}, 

    city: {
        type: String,
        required: true
    },

    price: {
        type:Number,
        // required:true
     }, //ASK IF ITS NUMBER IS OK OR WE NEED TO SPECIFY INTEGER FLOAT ?

    instruments: {
        type: String,
        required: true,
        enum: ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
        'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'microphone']
    },
    description:{
        type:String,
        required: true,
    },
    coordinate: 
    {
        type:Array,
        default: []
    }, 
    picture: {
        type: String
    },
  },{
    timestamps: true
})

const Sale = model("Sale", saleSchema);

module.exports = Sale;
