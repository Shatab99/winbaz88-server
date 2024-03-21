const mongoose = require('mongoose');
const { Schema } = mongoose

const historySchema = new Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    transactionId: { type: String },
    amount: { type: Number },
    method: { type: String },
    status: { type: String },
    category: { type: String, default: "Deposit" },
    confirm : {type : Boolean, default : true}
})

const History = mongoose.model("History", historySchema)
module.exports = History