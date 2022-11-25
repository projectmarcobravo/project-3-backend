const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const errorHandling = require("../error-handling");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const User = require("../models/User.model");
const Sale = require("../models/Sale.model");
const Event = require("../models/Events.model")
const Classes = require('../models/Classes.model')



// router.post("/profile/:userId", isAuthenticated, async (req, res) => {
//     const { favorite } = req.body
//     const userId = req.payload._id
 
//     try {
//        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { favorite: newInstrument._id } })//NEED TO UPDATEALL
//        res.json(newInstrument)//THIS IS ONLY TO SEE THE INFO
//     } catch (error) {
//        res.json(error)
//     }
//  })

//  router.post("/profile/:userId", isAuthenticated, async (req, res) => {
//     const { city, price, instruments, description, photo } = req.body
//     const userId = req.payload._id
 
//     try {
//        const newInstrument = await Sale.create({ city, price, instruments, description, photo, creator: userId })
//        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { sale: newInstrument._id } })//NEED TO UPDATEALL
//        res.json(newInstrument)//THIS IS ONLY TO SEE THE INFO
//     } catch (error) {
//        res.json(error)
//     }
//  })

//  router.post("/profile/:userId", isAuthenticated, async (req, res) => {
//     const { city, price, instruments, description, photo } = req.body
//     const userId = req.payload._id
 
//     try {
       
//     } catch (error) {
//        res.json(error)
//     }
//  })

 module.exports = router