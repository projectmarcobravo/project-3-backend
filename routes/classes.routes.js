const express = require('express')
const router = express.Router()
const User = require("../models/User.model");

const Classes = require('../models/Classes.model')
const { isAuthenticated } = require('../middleware/jwt.middleware')

// GET

router.get('/classes', async (req, res) => {
    try {
        const classesDb = await Classes.find().populate('creator')
        res.json(classesDb)
    } catch (error) {
        console.log(error)
    }
})

router.get('/classes/:classId', async (req, res) => {
    const { classId } = req.params 
    try {
        const classesDb = await Classes.findById(classId).populate('creator')
        res.json(classesDb)
    } catch (error) {
        console.log(error)
    }
})

// POST
router.post('/classes', isAuthenticated, async (req, res) => {
    const { instruments, price, level, title, description } = req.body
    const userId = req.payload._id
    try {
        const classes = await Classes.create({title, instruments, price, level, creator: userId, title, description})
        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { classes: classes._id } })//NEED TO UPDATEALL
        res.json(classes)
    } catch (error) {
        console.log(error)
    }
})


//PUT
router.put('/classes/:classId', async (req, res) => {
    const { classId } = req.params
    const classUpdate = req.body

    try {
        const classDb = await Classes.findByIdAndUpdate(classId, classUpdate)
        res.json(classDb)
    } catch (error) {
        res.json(error)
    }
})


//DELETE

router.delete('/classes/:classId', async (req, res) => {
    const { classId } = req.params
    try {
        const classDb = await Classes.findByIdAndRemove(classId)
        res.json(classDb)
    } catch (error) {
       res.json(error) 
    }
})

module.exports = router;