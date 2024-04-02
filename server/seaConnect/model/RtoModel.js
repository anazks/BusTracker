const mongoose = require('mongoose');


const rtomodel = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Must Provide name"],
    }, 
    email: {
        type: String,
        required: [true, "Must Provide email"],
    },
    mobile: {
        type: String,
        required: [true, "Must Provide email"],
    },
    password: {
        type: String,
        required: [true, "Must Provide email"],
    }
})

module.exports = mongoose.model('rto', rtomodel);  