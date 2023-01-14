const express = require('express');
const router = express.Router();
//COMPLETE the router
const {getAllPlaces}=require('../controllers/placeControllers');
router.get('/place',getAllPlaces );

module.exports = router;
