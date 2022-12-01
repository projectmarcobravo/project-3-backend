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
            style: "Folk",
            telephone: "34685663926",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53GA9SGZDtClmiT_kV6iDMswsv9-ropI2Ng&usqp=CAU",
            description: "Born in Venezuela, but lived in different continents and countries since a young age. Music is my rythm of life"
         },
         {
            name: "Jose Maria Perez-Hita Freitas",
            username: "messismo",
            email: "JM@PH.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Saxophone",
            style: "Flamenco",
            telephone: "34687225861",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfv18HCAeQxJKkGQYHQIoqPTjlyxENgwRUMA&usqp=CAU",
            description: "Born in Brazil, but moved to Barcelona, Spain 15 years ago. Love singing on my spare time."
         },
         {
            name: "Marco Bravo",
            username: "bravco",
            email: "marco@bravo.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Ukelele",
            style: "Trance",
            telephone: "34660646710",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSq2YjGwdejWupDJyX1cWQ23EQ2-pxcBryw&usqp=CAU",
            description: "I love traveling, my must need on my luggage is my guitar. I feel empty without it."
         },

         {
            name: "Agustín Marcote",
            username: "DiosMessi",
            email: "agustin@marcote.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Accordion",
            style: "Electronic",
            telephone: "34672728948",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhZrS3CjJUbvLCotCQiSObCyITV4Uxj9pIw&usqp=CAU",
            description: "Never been too interested in music, but always wanted to learned. That is the reason I am here."
         },

         {
            name: "James Paul McCartney",
            username: "Paul",
            email: "paul@thebeatles.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar",
            style: "Rock",
            picture: "https://imgs.smoothradio.com/images/144489?width=3208&crop=1_1&signature=nrDDei-0yPZtAWHn2mfBUJHOUHM=",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            description: "I am the boss.",
         },

         {
            name: "John Winston Lennon",
            username: "John",
            email: "john@thebeatles.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar",
            style: "Rock",
            picture: "https://okdiario.com/img/2017/12/18/john-lennon-e1513589833449.jpg",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            description: "Music is life. Yoko is life. The Beatles are life.",
         },

         {
            name: "Richard Starkey",
            username: "Ringo",
            email: "ringo@thebeatles.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Drums",
            style: "Classic",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture: "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/fjnwugbhyjisvace9qy9.jpg",
            description: "Put me sticks on my hand and something amazing will happen.",

         },

         {
            name: "George Harrison",
            username: "George",
            email: "george@thebeatles.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar",
            style: "Rock",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture: "https://imgs.smoothradio.com/images/209608?width=4024&crop=4_3&signature=OJDhbI1pB6WjqE5EhVgxLRmRaVE=",
            description: "Music has gave me everything in life. I lived the dream.",
         },

         {
            name: "Saul Hudson",
            username: "Slash",
            email: "slash  @guns.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar",
            style: "Rock",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture: "https://media.gettyimages.com/id/154478160/es/foto/slash-performs-at-le-zenith-on-october-20-2012-in-paris-france.jpg?s=612x612&w=gi&k=20&c=wsMaQIuW4ZX8jtm87Z64rO-KZaLG62bRCW0J2REzSRA=",
            description: "Nothing like touching my guitar. I have a special connection."
         },
         {
            name: "Adele Laurie Blue Adkins",
            username: "Adele",
            email: "adele@hello.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Microphone",
            style: "Pop",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture:"https://upload.wikimedia.org/wikipedia/commons/5/52/Adele_for_Vogue_in_2021.png",
            description: "An english normal girl who loves singing and makiing other people have a good time."
         },
         {
            name: "Angus McKinnon Young",
            username: "Angus",
            email: "angus@tnt.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Electric Guitar",
            style: "Rock",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture:"https://www.xlsemanal.com/wp-content/uploads/sites/3/2020/11/angus-young-el-mundo-no-necesita-una-balada-de-acdc-7-768x506.jpg",
            description: "Whenever I die, I want to be burried with my guitar next to me.",
         },
         {
            name: "David Eric Grohl",
            username: "Dave",
            email: "david@foo.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "Drums",
            style: "Rock",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture:"https://assets.medpagetoday.net/media/images/97xxx/97588.jpg",
            description: "Love to feel the connection with the crowd. The fans are awesome."
         },


         {
            name: "Steve Aoki",
            username: "Aoki",
            email: "aoki@dj.com",
            password: "$2b$10$7fzywPmB/9lOQXE1oOr2beno6Wje50RJAOZ66Bip7PIel7Vkfu8MW",
            instruments: "DJ",
            style: "Electronic",
            presentationCardSpotify: "https://open.spotify.com/artist/0bqlm5tlTnZIzpbQKi3MsX",
            presentationCardYouTube: "https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww",
            presentationCardSoundCloud: "https://soundcloud.com/tiesto",
            presentationCardiTunes: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardOther: "https://music.apple.com/us/artist/ti%C3%ABsto/4091218",
            presentationCardFacebook: "https://www.facebook.com/tiesto/",
            presentationCardInstagram: "https://www.instagram.com/tiesto/?hl=en",
            presentationCardLinkedIn: "https://www.linkedin.com/in/agustin-marcote-ba0aa9221/",
            presentationCardTwitter: "https://twitter.com/tiesto?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            picture:"https://cdns-images.dzcdn.net/images/artist/0383b9ee7f3d44c3bf84d9401189458e/500x500.jpg",
            description: "who wanna have a pie smashed to his face?",
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


      const updateUsers = async (event) => {
         try {
            await User.findByIdAndUpdate(event.creator, { $push: { event: event._id } })
            console.log("updated E")
         } catch (error) {
            console.log(error)
         }
      }

      dbEvent.forEach((event) => {
         updateUsers(event)
         console.log("updated DB E")
      })



      const sales = [
         {
            title: "Used Guitar",
            creator: dbUser[0]._id,
            city: "Barcelona",
            price: 500,
            instruments: "Guitar",
            description: "Classic Gibson, in perfect conditions.",
            picture: "https://cdn.shopify.com/s/files/1/0343/4368/2183/products/fender-electric-guitars-solid-body-fender-custom-shop-figured-mahogany-stratocaster-natural-2018-u4102513801-29679126413447_2566x.jpg?v=1663015819"
         },

         {
            title: "Used Drumset",
            creator: dbUser[1]._id,
            city: "Malaga",
            price: 700,
            instruments: "Drums",
            description: "Drums in good condition. Wanted to get rid of it, since it is from my ex.",
            picture: "https://musicopolix.com/blog/wp-content/uploads/2022/01/las-5-mejores-baterias-para-ninos-bonitas.png",
         },

         {
            title: "Used Microphone",
            creator: dbUser[2]._id,
            city: "Madrid",
            price: 200,
            instruments: "Microphone",
            description: "A high quality microphone.",
            picture: "https://vintageking.com/wp/wp-content/uploads/BestSellingMicrophones2018.jpg",
         },

         {
            title: "I'm selling my baby",
            creator: dbUser[3]._id,
            city: "Los Angeles",
            price: 800,
            instruments: "Electric Guitar",
            description: "The Craziest Guitar Eveeeer. Don't waste this chance",
            picture: "https://cdn11.bigcommerce.com/s-n9l2n2/images/stencil/1280x1280/products/87064/512596/DSC_5110__63928.1665594846.jpg?c=2"
         },

         {
            title: "Pearl Drums Like New",
            creator: dbUser[4]._id,
            city: "Cadiz",
            price: 1000,
            instruments: "Drums",
            description: "Just get and play. Special price",
            picture: "http://cdn.shopify.com/s/files/1/0343/4368/2183/products/pearl-drums-and-percussion-acoustic-drums-full-acoustic-kits-pearl-session-studio-select-13-16-18-24-4pc-drum-kit-nicotine-white-marine-pearl-sts944xp-c405-29171733659783_grande.jpg?v=1649967797"
         },

         {
            title: "This is your opportunity",
            creator: dbUser[5]._id,
            city: "St. Petersburg",
            price: 150000,
            instruments: "Violin",
            description: "This collector's item will be yours for a very special price",
            picture: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/irg1VQBaFB_0/v1/1200x-1.jpg"
         },

         {
            title: "James Madison's Flute could be yours",
            creator: dbUser[6]._id,
            city: "Washington",
            price: 12,
            instruments: "Flute",
            description: "Is perfect!! Approved by Lizzo",
            picture: "https://dcist.com/wp-content/uploads/sites/3/2022/09/AP19361751316902.jpg"
         },

         {
            title: "Paco de Lucia's Guitar",
            creator: dbUser[7]._id,
            city: "Algeciras",
            price: 90000,
            instruments: "Guitar",
            description: "The greatest name of Flamenco left this precious item for your. Buy it and make yourself great as him",
            picture: "https://s1.abcstatics.com/abc/www/multimedia/cultura/2022/07/14/gabriela-canseco-RuQYjlR9LCXqLIyrlRootgM-1240x768@abc.jpg"
         },

         {
            title: "Louis Armstrong's Trumpet",
            creator: dbUser[8]._id,
            city: "New Orleans",
            price: 10000,
            instruments: "Trumpet",
            description: "We found this jewel in a pawn house. The owners had no idea it belonged to one of the best of our time",
            picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/louis-armstrong-1651141819.png"
         },

         {
            title: "Play like an Angel",
            creator: dbUser[9]._id,
            city: "Lisboa",
            price: 900,
            instruments: "Harp",
            description: "The best opportunity to get an authentic harp in perfect conditions",
            picture: "https://images.squarespace-cdn.com/content/v1/5552b652e4b03e678d3faefd/1631796978519-WJBKWMO7LNPRHPBII83X/Close+up+Prod+eyes+down.jpg"
         },
      ]


      const dbSale = await Sale.create(sales)

      const updateUser = async (event) => {
         try {
            await User.findByIdAndUpdate(event.creator, { $push: { sale: event._id } })
            console.log("updated S")
         } catch (error) {
            console.log(error)
         }
      }

      dbSale.forEach((event) => {
         updateUser(event)
         console.log("updated DB S")
      })



      const classe = [
         {
            title: "Piano Lessons",
            creator: dbUser[0],
            description: "I've been teaching Piano since 2010's. More than 200 students are happy with my metodology",
            instruments: 'Piano',
            price: 25,
            level: "Beginner",
            picture: "https://www.skoove.com/blog/wp-content/uploads/2021/05/download-1-1024x576.jpeg"
         },
         {
            title: "Piano Lessons",
            creator: dbUser[1],
            description: "I've been a professional pianist and now I want to teach to the new generation this amazing instrument!",
            instruments: 'Piano',
            price: 50,
            level: "Advanced",
            picture: "https://perfectpraisemusic.com/wp-content/uploads/2018/03/good-fingering2-scaled.jpg"
         },
         {
            title: "Trumpet Lessons",
            creator: dbUser[2],
            description: "I'm looking to a group of 4 persons that want to learn how to play Trumpet",
            instruments: 'Trumpet',
            price: 30,
            level: "Advanced",
            picture: "https://d10j3mvrs1suex.cloudfront.net/u/408153/ec8d3a4297478c7a3bfaa9265a2d345e4953dc67/large/4.jpg/!!/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg"
         },
         {
            title: "DJ Lessons",
            creator: dbUser[3],
            description: "My last students David, Martin, Tijs and Steve can confirm I'm the best decision when it comes to learn ",
            instruments: 'DJ',
            price: 30,
            level: "Advanced",
            picture: "https://images.squarespace-cdn.com/content/v1/570ad1a09f726623e0c9462e/1502300355420-298QVHP6KWBTJZOYGZ2F/DJ-Courses-Online-DJ-School.jpg?format=2500w"
         },
         {
            title: "Flute for intermediate students",
            creator: dbUser[4],
            description: "Play like a Pan",
            instruments: 'Flute',
            price: 90,
            level: "Intermediate",
            picture: "https://www.musicalbri.com/wp-content/uploads/2014/12/flute-lessons.jpg"
         },
         {
            title: "Clarinet for beginners",
            creator: dbUser[5],
            description: "This could be a real opportunity to start playing one of the best instruments",
            instruments: 'Clarinet',
            price: 70,
            level: "Beginner",
            picture: "https://static.wixstatic.com/media/e398bd_6e4c9a58cccd4ae1b73668aa6149c9c4~mv2.jpg/v1/fill/w_640,h_480,al_l,q_80,usm_0.66_1.00_0.01,enc_auto/e398bd_6e4c9a58cccd4ae1b73668aa6149c9c4~mv2.jpg"
         },
         {
            title: "Banjo like a Boss",
            creator: dbUser[6],
            description: "A revolutionary method to learn how to play the Banjo",
            instruments: 'Banjo',
            price: 15,
            level: "Advanced",
            picture: "https://cdn.shopify.com/s/files/1/0204/9822/files/ryan-cavanaugh_2000x.jpg?v=1614379878"
         },
         {
            title: "Take your Piano skills beyond Bohemian Rhapsody",
            creator: dbUser[7],
            description: "Don't get stuck in one song. Move forward with my lessons",
            instruments: 'Piano',
            price: 90,
            level: "Beginner",
            picture: "https://www.sinfonicapz.com/wp-content/uploads/2022/04/Por-que-aprender-a-tocar-piano-Conozca-los-beneficios-de-este-instrumento.jpg"
         },
         {
            title: "Be the best of the best",
            creator: dbUser[8],
            description: "In few months I can take you to the level of the best violin players in the world",
            instruments: 'Violin',
            price: 150,
            level: "Advanced",
            picture: "https://www.fiddleheads.com/pub/media/magefan_blog/violinist_woman_inspecting_violin_shopping_adult-artist-entertainment-936030_blurred.jpg"
         },
         {
            title: "3 Recordings after 20 classes",
            creator: dbUser[9],
            description: "Do you remember the song Your Latest Trick from Dire Straits? That was me",
            instruments: 'Saxophone',
            price: 100,
            level: "Intermediate",
            picture: "https://www.newburysaxschool.co.uk/wp-content/uploads/2020/04/maxresdefault.jpg"
         }
      ]

      const dbClass = await Classes.create(classe)


      const updateUse = async (event) => {
         try {
            await User.findByIdAndUpdate(event.creator, { $push: { classes: event._id } })
            console.log("updated C")
         } catch (error) {
            console.log(error)
         }
      }

      dbClass.forEach((event) => {
         updateUse(event)
         console.log("updated DB")
      })



      console.log("Seeds created")
   } catch (err) {
      console.log(`Error creating the seeds: ${err}`)
   }
}

createSeeds()
