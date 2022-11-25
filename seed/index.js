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
            title: "Used Guitar",
            creator: dbUser[0]._id,
            city: "Barcelona",
            price: 500,
            instruments: "Guitar",
            description: "Classic Gibson, in perfect conditions.",
            photo: "https://i.etsystatic.com/20421188/r/il/535720/2226638036/il_570xN.2226638036_d419.jpg"
         },
         {
            title: "Used Drumset",
            creator: dbUser[1]._id,
            city: "Malaga",
            price: 700,
            instruments: "Drums",
            description: "Drums in good condition. Wanted to get rid of it, since it is from my ex.",
            photo: "https://musicopolix.com/blog/wp-content/uploads/2022/01/las-5-mejores-baterias-para-ninos-bonitas.png",
         },
         {
            title: "Used Microphone",
            creator: dbUser[2]._id,
            city: "Madrid",
            price: 200,
            instruments: "microphone",
            description: "A high quality microphone.",
            photo: "https://vintageking.com/wp/wp-content/uploads/BestSellingMicrophones2018.jpg",
         }
      ]
      const dbSale = await Sale.create(sales)


      const classe = [
         {
            title: "Paino Lessons",
            creator: dbUser[0],
            description: "I've been teaching Piano since 2010's. More than 200 students are happy with my metodology",
            instruments: 'Piano',
            price: 25,
            level: "Beginner",
         },
         {
            title: "Paino Lessons",
            creator: dbUser[1],
            description: "I've been a professional pianist and now I want to teach to the new generation this amazing instrument!",
            instruments: 'Piano',
            price: 50,
            level: "Advanced",
         },
         {
            title: "Trumpet Lessons",
            creator: dbUser[2],
            description: "I'm looking to a group of 4 persons that want to learn how to play Trumpet",
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
