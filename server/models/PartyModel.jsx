const mongoose = require("mongoose")
const PartySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type:String,
        default:""
    },
    
})

const PartyModel = mongoose.model('parties', PartySchema)
module.exports = PartyModel