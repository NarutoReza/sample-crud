const mongoose = require("mongoose")

const User = new mongoose.Schema({
    name: { type: String },
    password: { type: String },
    email: { type: String },
    phone: { type: String },
    gender: { type: String },
    hear: { type: String },
    city: { type: String },
    state: { type: String }
})

module.exports = mongoose.model('User', User)