const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const CompanySchema = new Schema({
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
        type: String,
        required: true
    }
})

module.exports = Company = mongoose.model("company", CompanySchema)
