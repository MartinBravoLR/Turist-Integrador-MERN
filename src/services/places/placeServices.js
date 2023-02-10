const {Place} =require('../models/place.model')

async function getAllPlaces(){
    try {
        const places = await Place.find({});
        return places;
    } catch (error) {
  throw error;
    }
};

const getOnePlace =async(placeId) =>{
    try {
        const place = await Place.findById(placeId);
        return place;
    } catch (error) {
        throw error;

    }
};

const createNewPlace =async(body) =>{
    try {
        const place = new Place(body);
        await place.save();
        return {msg:"ok"}  }
    catch (error) {
        throw error;
        
    }
};

const updatePlace =async(placeId,data) =>{
    try {
        const {name,locate,info,type}=data;
        const place = await Place.findById(placeId);
        place.name=name||place.name;
        place.locate=locate || place.locate;
        place.info=info || place.info;
        place.type=type || place.type;
        await place.save();
    } catch (error) {
        throw error;

    }
};

const deleteOnePlace  =async(placeId) =>{
    try{
        const PlaceD=await Place.findByIdAndDelete(placeId);
        return placeD;
    } catch (error) {
       throw error;

    }

};

module.exports = {
    getAllPlaces,
    getOnePlace,
    createNewPlace,
    updatePlace,
    deleteOnePlace
}