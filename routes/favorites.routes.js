const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const errorHandling = require("../error-handling");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const User = require("../models/User.model");
const Sale = require("../models/Sale.model");
const Event = require("../models/Events.model")
const Classes = require('../models/Classes.model')



 router.post("/addInstrument/:instrumentId", isAuthenticated, async (req, res) => {
     const { instrumentId } = req.params
     const userId = req.payload._id
 
     try {
        const instrument = await Sale.findById(instrumentId)
        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { favoriteSale: instrument._id } })
        res.json(instrument._id)
     } catch (error) {
        res.json(error)
     }
  })

  router.post("/addEvent/:eventId", isAuthenticated, async (req, res) => {
    const { eventId } = req.params
    const userId = req.payload._id

    try {
       const event = await Event.findById(eventId)
       const userUpdate = await User.findByIdAndUpdate(userId, { $push: { favoriteEvent: event._id } })
       res.json(event._id)
    } catch (error) {
       res.json(error)
    }
 })

 router.post("/addClass/:classId", isAuthenticated, async (req, res) => {
    const { classId } = req.params
    const userId = req.payload._id

    try {
       const klass = await Classes.findById(classId)
       const userUpdate = await User.findByIdAndUpdate(userId, { $push: { favoriteClass: klass._id } })
       res.json(klass._id)
    } catch (error) {
       res.json(error)
    }
 })


 module.exports = router