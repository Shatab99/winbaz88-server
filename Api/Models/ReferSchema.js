const mongoose = require('mongoose');
const {Schema} = mongoose

const referSchema = new Schema({
    referEmail : String,
    referCode : String, 
})

const Refer = new mongoose.model("Refer", referSchema)

module.exports = Refer