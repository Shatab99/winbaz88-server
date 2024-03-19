const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    name : {type : String, required : true},
    email : String,
    role : {
        type : String,
        default : "user"
    },
    refered : {
        type : String , default : "No refer !!"
    }, 
    credit : {
        type : Number,
        default : 0.00,
    }
})

const User  = mongoose.model("User", userSchema)
module.exports = User ;