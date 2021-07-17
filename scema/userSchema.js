const mongoose = require('mongoose');

const userHandler = mongoose.Schema({

    name: {
        type: String,
        required: true,
    }, userName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"]
    }



})