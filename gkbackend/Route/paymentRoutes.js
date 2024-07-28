// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { savePaymentInfo, getPaymentInfoByEmail } = require('../controllers/paymentController');

// POST request to save payment information
router.post('/', savePaymentInfo);

// GET request to retrieve payment information by email ID
router.get('/:email', getPaymentInfoByEmail);

module.exports = router;
