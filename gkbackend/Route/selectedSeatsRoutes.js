

const express = require('express');
const router = express.Router();
const selectedSeatsController = require('../controllers/SelectedSeatsController');
const { io } = require('../index'); 


// router.post('/', selectedSeatsController.createBooking);
router.post('/', (req, res) => {
    selectedSeatsController.createBooking(req, res, io);
  });


router.get('/:busId', selectedSeatsController.getBookingsByBusId);

router.get('/seats/:busId', selectedSeatsController.getSelectedSeatsByBusId);


router.delete('/:busId/:selectedSeat', selectedSeatsController.deleteBookingsByBusIdAndSelectedSeat);

router.get('/emails/find', selectedSeatsController.getBookingsByEmail);

router.get('/', selectedSeatsController.getAllBookings);




module.exports = router;
