const mongoose = require('mongoose');
const {Schema} = mongoose

const adminPhoneSchema = new Schema({
    bkash : String,
    nagad : String,
    upay : String,
    rocket : String,
})

const AdminPhone = new mongoose.model("AdminPhoneNumber", adminPhoneSchema)

module.exports = AdminPhone