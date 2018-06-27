const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load model
const Task = require('../models/Task')
const User = require('../models/User')

// Load validation
const validateTaskInput = require('../validation/tasks/validateTaskInput')

/*
 * @route   GET /tasks/test
 * @desc    Testing route
 * @access  Public
 */
router.get('/test', async (req,res,next) => {
    try{
        const docs = await {message: 'Task routing test'}
        res.status(200).send(docs)
    }catch(e){
        next(e)
    }
})

/*
 * @route   POST /tasks
 * @desc    Create task by user
 * @access  Private
 */

router.post('/', passport.authenticate('jwt', { session: false }), (req,res) => {

    const {errors, isValid } = validateTaskInput(req.body);

    // Check validation
    if(!isValid){
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }

    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        user: req.user.id
    });

    newTask.save().then(task => res.json(task))
});



module.exports = router