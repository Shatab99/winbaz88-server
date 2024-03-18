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
        type : Boolean , default : false
    }
})

const User  = mongoose.model("User", userSchema)
module.exports = User ;