const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const userSchema = require('../scema/userSchema');

const User = new mongoose.model("user", userSchema)

router.post('/signup', async (req, res) => {

    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            name: req.body,
            userName: req.body,
            password: hashPassword,
        });
        await newUser.save();
        res.status(200).json({ message: 'SignUp successfully' })
    } catch {
        res.status(200).json({ message: 'SignUp failed' })
    }

})