const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    file: String,
    password: String,
    biography: String,
    comments: String,
    phone: Number

})

const UserModel = mongoose.model("users", UserSchema)
module.exports  = UserModel