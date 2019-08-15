const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const AllDataSchema = new Schema({
    education:{
        type: Array,
        required: true
    },
    skill:{
        type: Array,
        required: true
    },
    company:{
        type: Array,
        required: true
    },
    project:{
        type: Array,
        required: true
    }
})

module.exports = AllData = mongoose.model("allData", AllDataSchema)
