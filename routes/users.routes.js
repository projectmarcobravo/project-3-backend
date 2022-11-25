const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const errorHandling = require("../error-handling");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

router.get("/profile", isAuthenticated, async (req, res)=> {
    const currentUser = req.payload
    try {
       const profileDb = await User.findById(currentUser._id)
       res.json(profileDb)
    } catch (error) {
       res.json(error)
    }
 })
module.exports = router

// router.get("/profile/:userId", async (req, res)=> {
//     const { userId } = req.params
//     try {
//        const userDB = await User.findById(userId).populate("sale event classes")
//        console.log(userDB)
//        res.json(userDB)
//     } catch (error) {
//        res.json(error)
//     }
//  })
// module.exports = router

router.put("/profile/edit", isAuthenticated, async (req, res) => {
    const  userId = req.payload._id
    const userUpdate = req.body
    try {
       const userDB = await User.findByIdAndUpdate(userId, userUpdate)
       res.json(userDB)
    } catch (error) {
       res.json(error)
    }
 })












