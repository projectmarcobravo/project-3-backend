const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      default: ""
    },
    picture: {
      type: String,
      default: "https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
    },
    presentationCardSpotify: {
      type: String,
      trim: true,
      default: ""
    },
    presentationCardYouTube: {
      type: String,
      trim: true,
      default: ""
    },
    presentationCardSoundCloud: {
      type: String,
      trim: true,
      default: ""
    },
    presentationCardiTunes: {
      type: String,
      trim: true,
      default: ""
    },presentationCardOther: {
      type: String,
      trim: true,
      default: ""
    },
    presentationCardFacebook: {
      type: String,
      trim: true,
      default: ""
    },
    presentationCardInstagram: {
      type: String,
      trim: true,
      default: ""
    },
    presentationCardLinkedIn: {
      type: String,
      trim: true,
      default: ""
    },
    presentationCardTwitter: {
      type: String,
      trim: true,
      default: ""
    },
    telephone: {
      type: String,
      trim: true,
      default: ""
    },
    images: {
      imagesUrl: [String],
    },
    description: {
      type: String,
      default: ""
    },
    instruments: {
      type: [String],
      enum: ['-', 'DJ', 'Piano', 'Guitar', 'Violin', 'Drums', 'Saxophone', 'Flute', 'Cello',
        'Clarinet', 'Trumpet', 'Harp', 'Ukelele', 'Electric Guitar', 'Banjo', 'Accordion', 'Microphone']
    },
    style: {
      type: [String],
      enum: ['-', "Dance", "Folk", "Bachata", "Rock", "Reggaeton", "Rap", "Flamenco", "Classic", "Tango", "Indie","Trap", "Pop", "Electronic", "Blues", "Punk", "Jazz", "Techno", "Choir", "Trance",]
  },
    favoriteSale: [{ type: Schema.Types.ObjectId, ref: 'Sale' }],
    favoriteEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    favoriteClass: [{ type: Schema.Types.ObjectId, ref: 'Classes' }],
    sale: [{ type: Schema.Types.ObjectId, ref: 'Sale' }],
    event: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    classes: [{ type: Schema.Types.ObjectId, ref: 'Classes' }],
    rate: {
      type: Number, min: 0, max: 5,
      default: 0
    },
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
