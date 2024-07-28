const express = require('express');
const router = express.Router();
const boardingsController = require('../controllers/boardingpointController');

// Get all boarding points
router.get('/', boardingsController.getAllBoardingPoints);

// Create a new boarding point
router.post('/', boardingsController.createBoardingPoint);

// Get boarding points by city
router.get('/:city', boardingsController.getBoardingPointsByCity);

module.exports = router;
