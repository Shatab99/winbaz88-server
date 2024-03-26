const mongoose = require('mongoose');
const {Schema} = mongoose

const adminPhoneSchema = new Schema({
    phone : String
})

const AdminPhone = new mongoose.model("AdminPhoneNumber", adminPhoneSchema)

module.exports = AdminPhone