const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
 number:{
    type: Number
 }
})

const RoomsModel = mongoose.model("/rooms", RoomSchema)
module.exports = RoomsModel