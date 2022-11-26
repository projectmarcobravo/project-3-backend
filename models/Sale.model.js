const { Schema, model } = require("mongoose");

const saleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    creator:{ type: Schema.Types.ObjectId, ref: 'User'}, 

    city: {
        type: String,
        required: true
    },

    price: {
        type:Number,
        default: 0
        // required:true
     }, //ASK IF ITS NUMBER IS OK OR WE NEED TO SPECIFY INTEGER FLOAT ?

    instruments: {
        type: String,
        required: true,
        enum: ['DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
        'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']//TESST
    },
    description:{
        type:String,
        required: true,
    },
    address: 
    {
        type: String,
        default: ""
    }, 
    picture: {
        type: String,
        default: ""
    },
  },{
    timestamps: true
})

const Sale = model("Sale", saleSchema);

module.exports = Sale;
