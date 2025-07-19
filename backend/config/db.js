const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/hostelmart')
        console.log('connected to db')
    } catch (error) {
        console.log(error)
        
    }
    
}

module.exports = connectDB