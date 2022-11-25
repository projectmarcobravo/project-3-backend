const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const errorHandling = require("../error-handling");
const { isAuthenticated } = require("../middleware/jwt.middleware");

const Event = require("../models/Events.model")

router.post("/create", isAuthenticated, async (req, res) => {
    const userId = req.payload._id
    console.log(req.payload)
    const { title, creator, typeOfEvent, style, instruments, 
        picture, phoneNumber, description, price, coordinates, date } = req.body
   try {
      const newEvent = await Event.create({title, creator: userId , typeOfEvent, style, instruments, 
        picture, phoneNumber, description, price, coordinates, date})
      res.json(newEvent)
   } catch (error) {
      console.log(error)
   }
})

router.get("/", async (req, res)=> {
   try {
      const eventsDb = await Event.find().populate("creator")
      res.json(eventsDb)
   } catch (error) {
      res.json(error)
   }
})

router.get("/:eventId", async (req, res) => {
   const { eventId } = req.params
   try {
      const eventsDb = await Event.findById(eventId).populate("creator")
      res.json(eventsDb)
   } catch (error) {
      console.log(error)
   }
})

router.put("/:eventId", async (req, res) => {
   const { eventId } = req.params
   const eventUpdate = req.body
   try {
      const eventsDb = await Project.findByIdAndUpdate(eventId, eventUpdate)
      res.json(eventsDb)
   } catch (error) {
      res.json(error)
   }
})

router.delete("/:eventId", async (req, res) => {
   const { eventId } = req.params
   try {
      const eventDeleted = await Event.findByIdAndRemove(eventId)
      res.json({ message: `event with id ${eventDeleted} was deleted`})
   } catch (error) {
      res.json(error)
   }
})

module.exports = router

