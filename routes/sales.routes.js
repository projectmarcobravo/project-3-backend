const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const errorHandling = require("../error-handling");

const Sale = require("../models/Sale.model");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const User = require("../models/User.model");

router.post("/instrument", isAuthenticated, async (req, res) => {
   const { city, price, instruments, description, picture, title } = req.body
   const userId = req.payload._id

   try {
      const newInstrument = await Sale.create({ title, city, price, instruments, description, picture, creator: userId })
      const userUpdate = await User.findByIdAndUpdate(userId, { $push: { sale: newInstrument._id } })//NEED TO UPDATEALL
      res.json(newInstrument)//THIS IS ONLY TO SEE THE INFO
   } catch (error) {
      res.json(error)
   }
})
router.get("/instrument", async (req, res) => {
   try {
      const instrumentsDb = await Sale.find().populate("creator")
      res.json(instrumentsDb)
   } catch (error) {
      res.json(error)
   }
})
router.get("/instrument/:instrumentId", async (req, res) => {
   const { instrumentId } = req.params
   try {
      const instrumentDB = await Sale.findById(instrumentId).populate("creator")
      res.json(instrumentDB)
   } catch (error) {
      res.json(error)
   }
})
router.put("/instrument/:instrumentId", async (req, res) => {
   const { instrumentId } = req.params
   const instrumentUpdate = req.body
   try {
      const instrumentDB = await Sale.findByIdAndUpdate(instrumentId, instrumentUpdate)
      res.json(instrumentDB)
   } catch (error) {
      res.json(error)
   }
})
router.delete("/instrument/:instrumentId", async (req, res) => {
   const { instrumentId } = req.params
   try {
      const instrumentDeleted = await Sale.findByIdAndRemove(instrumentId)
      res.json({ message: `instrument for sale with id ${instrumentDeleted._id} was deleted` })
   } catch (error) {
      res.json(error)
   }
})

module.exports = router

