const mongoose = require('mongoose');
const {Schema} = mongoose

const DepositSchema = new Schema({
    name : {type : String},
    email : {type : String},
    phone : {type : String },
    transactionId : {type : String },
    amount : {type : Number },
    method : {type : String },
    status : {type : String, default : "Pending"},
    category : {type : String, default : "Deposit"}
}) 

const Deposit = mongoose.model("Deposit", DepositSchema)
module.exports = Deposit