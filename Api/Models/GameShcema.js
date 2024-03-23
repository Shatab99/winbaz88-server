const mongoose = require('mongoose');
const { Schema } = mongoose

const gameShcema = new Schema({
    email : String,
    randomResult : Number,
    selectedNumbers : Array,
    betAmount : Number ,
})

const Game = new mongoose.model("GameData", gameShcema)

module.exports = Game