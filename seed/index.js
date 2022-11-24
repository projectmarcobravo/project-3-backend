const mongoose = require("mongoose")
const User = require("../models/User.model")
const Event = require("../models/Events.model")
const Sale = require("../models/Sale.model")
const Classes = require("../models/Classes.model")
// const Favorite = require("../models/Favorite.model")


// Require the models,  Example: (-- const Book = require("../models/Book.model") --)

const MONGO_URI = "mongodb://localhost:27017/project3"


const createSeeds = async function () {
   try {
      const connect = await mongoose.connect(MONGO_URI)
      console.log(`Connected to database: ${connect.connections[0].name}`)

      const deleteAll = await User.deleteMany()
      const deleteAll1 = await Event.deleteMany()
      const deleteAll2 = await Sale.deleteMany()
      const deleteAll3 = await Classes.deleteMany()

      console.log("Db clean")

      // Clear DB,  Example: (-- const deleteAll = await Book.deleteMany() --)
      // console.log("Db clean")

      const users = [
         {
            name: "Matias Molina Bishop",
            username: "mBishopM",
            email: "mati@bishop.com",
            password: "$2b$10$WgLf0W7ZYDUIK1U/IN6RG.89TPuBqWeh/gRuUokqK/lVr8TP3suBK",
            instruments: "Trumpet",
         },
         {
            name: "Jose Maria Perez-Hita Freitas",
            username: "messismo",
            email: "JM@PH.com",
            password: "$2b$10$WgLf0W7ZYDUIK1U/IN6RG.89TPuBqWeh/gRuUokqK/lVr8TP3suBK",
            instruments: "Saxophone"
         },
         {
            name: "Marco Bravo",
            username: "bravco",
            email: "marco@bravo.com",
            password: "$2b$10$WgLf0W7ZYDUIK1U/IN6RG.89TPuBqWeh/gRuUokqK/lVr8TP3suBK",
            instruments: "Ukelele"
         },
      ]
      const dbUser = await User.create(users)

      const events = [
         {
            creator: dbUser[0]._id,
            title: "2023 New Year Party",
            typeOfEvent: "Party",
            price: 100,
            date: 31 / 12 / 2022,
         },
         {
            creator: dbUser[1]._id,
            title: "FIFA World Cup Final",
            typeOfEvent: "Concert",
            price: 80,
            date: 18 / 12 / 2022,
         },
         {
            creator: dbUser[2]._id,
            title: "TMT",
            typeOfEvent: "Join a Band",
            price: 50,
            date: 12 / 12 / 2022,
         }
      ]
      const dbEvent = await Event.create(events)

      // dbEvent.forEach(async (event) => {

      //    const userUpdate = await User.findByIdAndUpdate(event.creator, { $push: { events: event._id } })
      // })

      const userUpdate2 = await User.findByIdAndUpdate(dbUser[0]._id, { $push: { event: events[0]._id } })

      //   const userUpdate1 = await User.findByIdAndUpdate(dbUser[0]._id,{ $push: { events: event._id } } )
      const userUpdate = await User.findByIdAndUpdate(dbUser[0]._id,)
      //console.log(userUpdate1)
      console.log(dbEvent[0])
      console.log(userUpdate2)




      const sales = [
         {
            creator: dbUser[0]._id,
            city: "Barcelona",
            price: 500,
            instrument: "Guitar",
            description: "Classic Gibson, in perfect conditions.",
            photo: "https://i.etsystatic.com/20421188/r/il/535720/2226638036/il_570xN.2226638036_d419.jpg"
         },
         {
            creator: dbUser[1]._id,
            city: "Malaga",
            price: 700,
            instrument: "Drums",
            description: "Drums in good condition. Wanted to get rid of it, since it is from my ex.",
            photo: "https://musicopolix.com/blog/wp-content/uploads/2022/01/las-5-mejores-baterias-para-ninos-bonitas.png",
         },
         {
            creator: dbUser[2]._id,
            city: "Madrid",
            price: 200,
            instrument: "microphone",
            description: "A high quality microphone.",
            photo: "https://vintageking.com/wp/wp-content/uploads/BestSellingMicrophones2018.jpg",
         }
      ]
      const dbSale = await Sale.create(sales)


      const classe = [
         {
            creator: dbUser[0],
            instruments: 'Piano',
            price: 25,
            level: "Beginner",
         },
         {
            creator: dbUser[1],
            instruments: 'Piano',
            price: 50,
            level: "Advanced",
         },
         {
            creator: dbUser[2],
            instruments: 'Trumpet',
            price: 30,
            level: "Advanced",
         }
      ]

      const dbClass = await Classes.create(classe)





      const dbClose = await mongoose.connection.close()
      console.log("Seeds created")
   } catch (err) {
      console.log(`Error creating the seeds: ${err}`)
   }
}

createSeeds()
