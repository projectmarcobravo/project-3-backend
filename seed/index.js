const mongoose = require("mongoose")
const User = require("../models/User.model")
const Event = require("../models/Events.model")
// const Event = require("../models/Events.model")
// const Classes = require("../models/Classes.model")
// const Favorite = require("../models/Favorite.model")
// const Sale = require("../models/Sale.model")

// Require the models,  Example: (-- const Book = require("../models/Book.model") --)

const MONGO_URI = "mongodb://localhost:27017/project3"


const createSeeds = async function () {
   try {
      const connect = await mongoose.connect(MONGO_URI)
      console.log(`Connected to database: ${connect.connections[0].name}`)

      const deleteAll = await User.deleteMany()

      console.log("Db clean")

      // Clear DB,  Example: (-- const deleteAll = await Book.deleteMany() --)
      // console.log("Db clean")

      const users = [
         {
            name: "Matias Molina Bishop",
            username: "mBishopM",
            email: "mati@bishop.com",
            password: "Ag1234",
            instruments: "Trumpet"
         },
         {
            name: "Jose Maria Perez-Hita Freitas",
            username: "messismo",
            email: "JM@PH.com",
            password: "Ag1234",
            instruments: "Saxophone"
         },
         {
            name: "Marco Bravo",
            username: "bravco",
            email: "marco@bravo.com",
            password: "Ag1234",
            instruments: "Ukelele"
         },
      ]
      const dbUser = await User.create(users)

      const events = [
         {
            creator: dbUser[0]._id,
            title: "2023 New Year Party",
            typeOfEvent: "Party"
         }
      ]
      const dbEvent = await Event.create(events)





      const dbClose = await mongoose.connection.close()
      console.log("Seeds created")
   } catch (err) {
      console.log(`Error creating the seeds: ${err}`)
   }
}

createSeeds()
