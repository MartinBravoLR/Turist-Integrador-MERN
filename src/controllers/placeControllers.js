const config = require('config');
const placeService = require('../services/places/placeServices');

    //COMPLETE WITH YOUR CODE

async function getAllPlaces (req,res,next){
    res.json({msg:"correct"})
}
async function getOnePlace (req,res,next){
    return ;

}

async function createNewPlace (req,res,next){
    return ;

}

async function updatePlace (req,res,next){
    return ;

}

async function deleteOnePlace (req,res,next){
   return ;
}


module.exports = {
    getAllPlaces,
    getOnePlace,
    createNewPlace,
    updatePlace,
    deleteOnePlace,
 }