const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const EducationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    major:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    otherInfo:{
        type: String,
        required: true
    }
})

module.exports = Education = mongoose.model("education", EducationSchema)
