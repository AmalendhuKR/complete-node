const express = require('express');
const tourControllers = require('./../controllers/tourControllers');
const router = express.Router();

router
  .route('/:id?')
  .get(tourControllers.getTourDetails)
  .post(tourControllers.checkBody, tourControllers.createTour)
  .patch(tourControllers.updateTour);


  module.exports = router;