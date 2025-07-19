const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: String,         // Add the type
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Create the model
const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
