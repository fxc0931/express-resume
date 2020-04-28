const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const NewsSchema = new Schema({
    author:{
        type: String
    },
    content:{
        type: String,
        required: true
    },
    content_short:{
        type: String
    },
    display_time:{
        type: Object
    },
    image_uri:{
        type: String
    },
    title:{
        type: String,
        required: true
    },
    status:{
        type: String
    },
})

module.exports = News = mongoose.model("news", NewsSchema)
