const mongoose = require('mongoose')
const {Schema} = mongoose;

  const placeSchema = new Schema({
    name:String,
    locate:String,
    coordinates:Array,
    info:String,
    type:String,
    image:Array
  });   

const Place = mongoose.model('Place',placeSchema)

module.exports={Place}