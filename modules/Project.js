const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const ProjectSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    workContent:{
        type: Array,
        required: true
    }
})

module.exports = Project = mongoose.model("project", ProjectSchema)
