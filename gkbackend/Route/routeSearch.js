const express = require('express');
const router = express.Router();
const { getRoutes } = require('../controllers/routeController'); // Adjust the path as necessary

// Define the route to fetch routes based on partial input
router.get('/', getRoutes);

module.exports = router;
