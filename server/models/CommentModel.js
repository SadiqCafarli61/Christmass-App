const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    comments: String,
    postedBy: String,
    file: String,
  
    likes: {
        type: Number,
        default: 0
    }
})
const CommentsModel  = mongoose.model("comments", CommentSchema)
module.exports=CommentsModel;