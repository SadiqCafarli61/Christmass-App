const mongoose = require("mongoose")
const ReservationSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
   room: {
    type: Number,
    required: true
   }
})

const ReservationModel = mongoose.model("reservations", ReservationSchema)
module.exports = ReservationModel; 