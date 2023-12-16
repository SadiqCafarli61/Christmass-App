const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    }
}) 

const PostModel = mongoose.model("posts", PostSchema)
module.exports  = PostModel