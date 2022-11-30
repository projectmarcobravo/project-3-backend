const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const errorHandling = require("../error-handling");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const User = require("../models/User.model");
const Sale = require("../models/Sale.model");
const Event = require("../models/Events.model")
const Classes = require('../models/Classes.model')


// GET
   router.get('/favorites', isAuthenticated, async (req, res) => {
      const userId = req.payload._id

      try {
         const dbFavorites = await User.findById(userId).populate('favoriteClass favoriteEvent favoriteSale')
         res.json(dbFavorites)
      } catch (error) {
         console.log(error)
      }
   }) 

// POST
 router.post("/addInstrument/:instrumentId", isAuthenticated, async (req, res) => {
     const { instrumentId } = req.params
     const userId = req.payload._id
 
     try {
        const instrument = await Sale.findById(instrumentId)
        const findUser = await User.findById(userId)
        if (findUser.favoriteSale.includes(instrumentId)) {
            const deleteInstr = await User.findByIdAndUpdate(userId, { $pull: { favoriteSale: instrument._id } })
            res.json(instrument._id)
        } else {
          const userUpdate = await User.findByIdAndUpdate(userId, { $push: { favoriteSale: instrument._id } })
        res.json(instrument._id)
        }
       
     } catch (error) {
        res.json(error)
     }
  })

  router.post("/addEvent/:eventId", isAuthenticated, async (req, res) => {
   const { eventId } = req.params
   const userId = req.payload._id

   try {
      const event = await Event.findById(eventId)
      const findUser = await User.findById(userId)
      if (findUser.favoriteEvent.includes(eventId)) {
        const deleteEvent = await User.findByIdAndUpdate(userId, { $pull: { favoriteEvent: event._id } })
        res.json(event._id)
      } else {
        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { favoriteEvent: event._id } })
        res.json(event._id)
      }
      
   } catch (error) {
      res.json(error)
   }
})

 router.post("/addClass/:classId", isAuthenticated, async (req, res) => {
    const { classId } = req.params
    const userId = req.payload._id

    try {
       const klass = await Classes.findById(classId)
       const findUser = await User.findById(userId)
       if (findUser.favoriteClass.includes(classId)) {
         const deleteEvent = await User.findByIdAndUpdate(userId, { $pull: { favoriteClass: klass._id } })
         res.json(klass._id)
       } else {
          const userUpdate = await User.findByIdAndUpdate(userId, { $push: { favoriteClass: klass._id } })
          res.json(klass._id)
       }
      
    } catch (error) {
       res.json(error)
    }
 })




// UNFAVORITE - EVENTS
 router.delete("/delete/events/:eventId", isAuthenticated, async (req, res) => {
   const { eventId } = req.params
   const userId = req.payload._id
   console.log('HERLLOS')

   try { 
      const dbEvent = await Event.findById(eventId)
      const removeFav = await User.findByIdAndUpdate(userId, { $pull: { favoriteEvent: dbEvent._id } })
      res.json(removeFav)
   } catch (error) {
      console.log(error)
   }
 })


 // UNFAVORITE - CLASSES
 router.delete("/delete/:classId", isAuthenticated, async (req, res) => {
   const { classId } = req.params
   const userId = req.payload._id

   try {
      const klass = await Classes.findById(classId)
      const removeFav = await User.findByIdAndUpdate(userId, { $pull: { favoriteClass: klass._id} })
      res.json(removeFav)
   } catch (error) {
      console.log(error)
   }
 })

//UNFAVORITE - SALES
router.delete("/delete/sales/:salesId", isAuthenticated, async (req, res) => {
   const { salesId } = req.params
   const userId = req.payload._id

   try {
      const sale = await Sale.findById(salesId)
      const removeFav = await User.findByIdAndUpdate(userId, { $pull: { favoriteSale: sale._id} })
      res.json(removeFav)
   } catch (error) {
      console.log(error)
   }
 })


 module.exports = router