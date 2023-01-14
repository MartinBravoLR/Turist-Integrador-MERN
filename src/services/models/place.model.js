const mongoose = require('mongoose')
const {Schema} = mongoose;

const placeSchema = new Schema({
  name:String,
  locate:String,
  info:String,
  type:String,
});   

const Place = mongoose.model('Place',placeSchema)

module.exports={Place}