const express = require("express")
const router = express.Router()
const mongoose = require("mongoose");
const errorHandling = require("../error-handling");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

router.get("/profile", async (req, res)=> {
    try {
       const profileDb = await User.find()
       res.json(profileDb)
    } catch (error) {
       res.json(error)
    }
 })
module.exports = router

router.get("/profile/:userId", async (req, res)=> {
    const { userId } = req.params
    try {
       const userDB = await User.findById(userId) //.populate("Sale")
       res.json(userDB)
    } catch (error) {
       res.json(error)
    }
 })
module.exports = router

router.put("/profile/:userId", async (req, res) => {
    const { userId } = req.params
    const userUpdate = req.body
    try {
       const userDB = await User.findByIdAndUpdate(userId, userUpdate)
       res.json(userDB)
    } catch (error) {
       res.json(error)
    }
 })












