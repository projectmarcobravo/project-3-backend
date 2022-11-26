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
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Trumpet",
         },
         {
            name: "Jose Maria Perez-Hita Freitas",
            username: "messismo",
            email: "JM@PH.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Saxophone"
         },
         {
            name: "Marco Bravo",
            username: "bravco",
            email: "marco@bravo.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Ukelele"
         },

         {
            name: "Agustín Marcote",
            username: "DiosMessi",
            email: "agustin@marcote.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Accordion"
         },
         
         {
            name: "James Paul McCartney",
            username: "Paul",
            email: "paul@thebeatles.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar"
         },

         {
            name: "John Winston Lennon",
            username: "John",
            email: "john@thebeatles.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar"
         },

         {
            name: "Richard Starkey",
            username: "Ringo",
            email: "ringo@thebeatles.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Drums"
         },

         {
            name: "George Harrison",
            username: "George",
            email: "george@thebeatles.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar"
         },

         {
            name: "Saul Hudson",
            username: "Slash",
            email: "slash  @guns.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar"
         },
{
            name: "Adele Laurie Blue Adkins",
            username: "Adele",
            email: "adele@hello.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Microphone"
         },
         {
            name: "Angus McKinnon Young",
            username: "Angus",
            email: "angus@tnt.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar"
         },
         {
            name: "David Eric Grohl",
            username: "Dave",
            email: "david@foo.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Drums"
         },


         {
            name: "Steve Aoki",
            username: "Aoki",
            email: "aoki@dj.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "DJ"
         },




      ]
      const dbUser = await User.create(users)

      const events = [
         {
            creator: dbUser[0]._id,
            title: "2023 New Year Party",
            picture: "https://utopia-villas.com/wp-content/uploads/2019/12/Depositphotos_91258984_xl-2015-2.jpg",
            description: "Be a DJ in the most luxurious party in Barcelona",
            phoneNumber: "3298473928",
            typeOfEvent: "Party",
            instruments: "DJ",
            style: "Blues",
            price: 100,
            date: 31 / 12 / 2022,
            address: "Carrer de Pons i Serra, 1, 08034 Barcelona"
         },
         {
            creator: dbUser[1]._id,
            title: "FIFA World Cup Final",
            picture: "https://s1.eestatic.com/2022/11/20/deportes/futbol/mundial/719938244_228853830_1706x960.jpg",
            description: "Play the Piano at the closure ceremony of FIFA's World Cup 2022",
            phoneNumber: "32912321428",
            typeOfEvent: "Concert",
            instruments: "Piano",
            style: "Rock",
            price: 80,
            date: 18 / 12 / 2022,
            address: "Lusail Stadium, Doha, Qatar"
         },
         {
            creator: dbUser[2]._id,
            title: "TMT",
            picture: "https://townsquare.media/site/295/files/2020/10/Kiss-Guitarists.jpg",
            description: "I am a lead guitarrist with blues and jazz influences, looking for a band",
            phoneNumber: "65468655",
            typeOfEvent: "Join a Band",
            instruments: "Electric Guitar",
            style: "Rock",
            price: 50,
            date: 12 / 12 / 2022,
         },

         {
            creator: dbUser[3]._id,
            title: "Our Wedding",
            picture: "https://celebrantspain.es/wp-content/uploads/2020/05/David-Luque-photographer-Spanish-wedding-vows-with-Celebrant.jpg",
            description: "We need a classic violinist for our wedding in two weeks",
            phoneNumber: "98665225254",
            typeOfEvent: "Party",
            instruments: "Violin",
            style: "Classic",
            price: 50,
            date: 22 / 12 / 2022,
            address: " Av. Camí de Miralpeix, 12, 08870 Sitges, Barcelona",
         },
         {
            creator: dbUser[4]._id,
            title: "The Best Jam Session in Barcelona",
            picture: "https://musicosdecatalunya.files.wordpress.com/2018/09/39751125_1890132591023627_2261503961578078208_n.jpg",
            description: "Last tickets for The Slingshots funk Jam Session in Gracia, Barcelona ",
            phoneNumber: "658552638",
            typeOfEvent: "Jamming",
            instruments: "Trumpet",
            style: "Blues",
            price: 10,
            date: 28 / 12 / 2022,
            address: "Plaça del Diamant08012 Barcelona",
         },
         {
            creator: dbUser[5]._id,
            title: "The Code Band is hiring",
            picture: "https://prosoundhq.com/wp-content/uploads/2020/03/three-guitar-players-scaled.jpg",
            description: "After 10 years on the road, we are looking for a new guitarrist",
            phoneNumber: "6987987652",
            typeOfEvent: "Hiring a Member",
            instruments: "Electric Guitar",
            style: "Rock",
            price: 200,
            date: 12 / 12 / 2022,
            address: "Los Angeles"
         },
         {
            creator: dbUser[6]._id,
            title: "We Need a Drumner",
            picture: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/30/16485996771326.jpg",
            description: "Concert for the end of Web Developer's course in Ironhack Barcelona",
            phoneNumber: "6669853214",
            typeOfEvent: "Concert",
            instruments: "Drums",
            style: "Jazz",
            price: 500,
            date: 02 / 12 / 2022,
            address: "Carrer de Pamplona, 96, 08018 Barcelona"
         },
         {
            creator: dbUser[7]._id,
            title: "I desperately need a band",
            picture: "https://indiehoy.com/wp-content/uploads/2022/07/slash-1.jpg",
            description: "Experienced lead guitarrist, looking for a new band",
            phoneNumber: "0015956363",
            typeOfEvent: "Join a Band",
            instruments: "Electric Guitar",
            style: "Rock",
            price: 50,
            date: 15 / 12 / 2022,
            address: "Miami"
         },
         {
            creator: dbUser[8]._id,
            title: "Play in a party in Honolulu, tonight",
            picture: "https://i.ytimg.com/vi/MTb_XlmTdXM/maxresdefault.jpg",
            description: "Good ukelele player need for two hours. Best payment in town",
            phoneNumber: "654864535",
            typeOfEvent: "Party",
            instruments: "Ukelele",
            style: "Indie",
            price: 5000,
            date: 02 / 12 / 2022,
            address: "2452 Kalākaua Ave, Honolulu, HI 96815, United States"
         },
         {
            creator: dbUser[9]._id,
            title: "Band looking for a Banjoman",
            picture: "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/INJ7GOZWZ5AOXNBRDLKS2HZVAU.jpg",
            description: "We need one more member for our band. We came from England for trials ",
            phoneNumber: "448585226636",
            typeOfEvent: "Hiring a Member",
            instruments: "Banjo",
            style: "Rock",
            price: 30,
            date: 12 / 12 / 2022,
            address: "Palau Sant Jordi, Barcelona"
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
            instruments: "Microphone",
            description: "A high quality microphone.",
            photo: "https://vintageking.com/wp/wp-content/uploads/BestSellingMicrophones2018.jpg",
         },

         {
            title: "I'm selling my baby",
            creator: dbUser[3]._id,
            city: "Los Angeles",
            price: 8000,
            instruments: "Electric Guitar",
            description: "The Craziest Guitar Eveeeer. Don't waste this chance",
            photo: "https://i.pinimg.com/originals/ee/df/69/eedf696e59f535c1a1348fa5d36304e5.jpg"
         },

         {
            title: "Brand New Flamenco Box",
            creator: dbUser[4]._id,
            city: "Cadiz",
            price: 1000,
            instruments: "Drums",
            description: "Just get and play. Special price",
            photo: "https://cajonflamencosoler.com/wp-content/uploads/2021/09/Modelo-Natura.jpeg"
         },

         {
            title: "This is your opportunity",
            creator: dbUser[5]._id,
            city: "St. Petersburg",
            price: 150000,
            instruments: "Violin",
            description: "This collector's item will be yours for a very special price",
            photo: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/irg1VQBaFB_0/v1/1200x-1.jpg"
         },

         {
            title: "James Madison's Flute could be yours",
            creator: dbUser[6]._id,
            city: "Washington",
            price: 12,
            instruments: "Flute",
            description: "Is perfect!! Approved by Lizzo",
            photo: "https://dcist.com/wp-content/uploads/sites/3/2022/09/AP19361751316902.jpg"
         },

         {
            title: "Paco de Lucia's Guitar",
            creator: dbUser[7]._id,
            city: "Algeciras",
            price: 90000,
            instruments: "Guitar",
            description: "The greatest name of Flamenco left this precious item for your. Buy it and make yourself great as him",
            photo: "https://s1.abcstatics.com/abc/www/multimedia/cultura/2022/07/14/gabriela-canseco-RuQYjlR9LCXqLIyrlRootgM-1240x768@abc.jpg"
         },

         {
            title: "Louis Armstrong's Trumpet",
            creator: dbUser[8]._id,
            city: "New Orleans",
            price: 10000,
            instruments: "Trumpet",
            description: "We found this jewel in a pawn house. The owners had no idea it belonged to one of the best of our time",
            photo: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/louis-armstrong-1651141819.png"
         },

         {
            title: "Play like an Angel",
            creator: dbUser[9]._id,
            city: "Lisboa",
            price: 900,
            instruments: "Harp",
            description: "The best opportunity to get an authentic harp in perfect conditions",
            photo: "https://images.squarespace-cdn.com/content/v1/5552b652e4b03e678d3faefd/1631796978519-WJBKWMO7LNPRHPBII83X/Close+up+Prod+eyes+down.jpg"
         },
      ]
      const dbSale = await Sale.create(sales)


      const classe = [
         {
            title: "Piano Lessons",
            creator: dbUser[0],
            description: "I've been teaching Piano since 2010's. More than 200 students are happy with my metodology",
            instruments: 'Piano',
            price: 25,
            level: "Beginner",
         },
         {
            title: "Piano Lessons",
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
         },
         {
            title: "DJ Lessons",
            creator: dbUser[3],
            description: "My last students David, Martin, Tijs and Steve can confirm I'm the best decision when it comes to learn ",
            instruments: 'DJ',
            price: 30,
            level: "Advanced",
         },
         {
            title: "Flute for intermediate students",
            creator: dbUser[4],
            description: "Play like a Pan",
            instruments: 'Flute',
            price: 90,
            level: "Intermediate",
         },
         {
            title: "Clarinet for beginners",
            creator: dbUser[5],
            description: "This could be a real opportunity to start playing one of the best instruments",
            instruments: 'Clarinet',
            price: 70,
            level: "Beginner",
         },
         {
            title: "Banjo like a Boss",
            creator: dbUser[6],
            description: "A revolutionary method to learn how to play the Banjo",
            instruments: 'Banjo',
            price: 15,
            level: "Advanced",
         },
         {
            title: "Take your Piano skills beyond Bohemian Rhapsody",
            creator: dbUser[7],
            description: "Don't get stuck in one song. Move forward with my lessons",
            instruments: 'Piano',
            price: 90,
            level: "Beginner",
         },
         {
            title: "Be the best of the best",
            creator: dbUser[8],
            description: "In few months I can take you to the level of the best violin players in the world",
            instruments: 'Violin',
            price: 150,
            level: "Advanced",
         },
         {
            title: "3 Recordings after 20 classes",
            creator: dbUser[9],
            description: "Do you remember the song Your Latest Trick from Dire Straits? That was me",
            instruments: 'Saxophone',
            price: 100,
            level: "Intermediate",
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
