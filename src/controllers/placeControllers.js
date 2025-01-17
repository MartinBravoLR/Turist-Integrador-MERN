const config = require('config');
const placeService = require('../services/places/placeServices');

    //COMPLETE WITH YOUR CODE

async function getAllPlaces (req,res,next){
    try {
        const AllPlaces=  await placeService.getAllPlaces();
        res.json(AllPlaces);    
    } catch (error) {
        res.status(503).json({
            code: 503,
            message: "Service unavailable" })
    }
}

async function getOnePlace (req,res,next){
    try {
        const {placeId} = req.params;
        const OnePlace=  await placeService.getOnePlace(placeId);
        res.json(OnePlace);    
    } catch (error) {
		res.status(400).json({
			code: 'bad_request',
			message: 'Bad request. Please check your parameters values',
		});
    }
}

async function createNewPlace (req,res,next){
    try {
        const {body,file} = req;
        console.log(file);
        const place =await placeService.createNewPlace(body);
        res.json(place);
    } catch (error) {
        res.status(400).json({
			code: 'bad_request',
			message: 'Bad request. Please check your parameters values',
		});
    }
}

async function updatePlace (req,res,next){
try {
    
       const {placeId}=req.params;
       const data = req.body;
       const updateOnePlace=await placeService.updatePlace(placeId,data)
       res.json(updateOnePlace);    
}  catch (error) {
		res.status(400).json({
			code: 'bad_request',
			message: 'Bad request. Please check your parameters values',
		});
	}    
}


async function deleteOnePlace (req,res,next){
try {
       const {placeId}=req.params;
       const deleteOnePlace=await placeService.deleteOnePlace(placeId)
       res.json(deleteOnePlace);
    
}   catch (error) {
		res.status(400).json({
			code: 'bad_request',
			message: 'Bad request. Please check your parameters values (Id Incorrect or Invalid)',
		});
	}

}


module.exports = {
    getAllPlaces,
    getOnePlace,
    createNewPlace,
    updatePlace,
    deleteOnePlace,
 }