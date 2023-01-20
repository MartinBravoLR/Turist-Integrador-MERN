const express = require('express')
const router = express.Router();

    //COMPLETE the router
const placeController = require('../controllers/placeControllers.js');
router

.get('/',placeController.getAllPlaces,)
.get('/:placeId',placeController.getOnePlace)
.post('/',placeController.createNewPlace)
.patch('/:placeId',placeController.updatePlace)
.delete('/:placeId',placeController.deleteOnePlace)

module.exports = router