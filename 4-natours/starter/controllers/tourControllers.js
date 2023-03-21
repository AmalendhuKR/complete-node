const fs = require('fs');

// not writing blocking code inside route handlers
const dbPath = `${__dirname}/../dev-data/data/tours-simple.json`;
const tourDetails = JSON.parse(fs.readFileSync(dbPath));

exports.checkBody = (req, res, next) =>{
  console.log('request body',req.body);
  if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('duration')){
    return res.status(400).json({
      status:'Invalid body',
      message: 'name and duration are required'
    })
  }
  next();
}

exports.getTourDetails = (req, res) => {
    if (req.params?.id) {
      let tour = tourDetails.find((item) => item.id == req.params.id);
      if (tour) {
        res.status(200).json({
          status: 'success',
          data: tour,
        });
      } else {
        // 404 - bad request
        res.status(404).json({
          status: 'Fail',
          message: 'Invalid ID',
        });
      }
    } else {
      // 200 - Ok
      res.status(200).json({
        status: 'success',
        results: tourDetails.length,
        data: tourDetails,
      });
    }
  };
  
exports.createTour = (req, res) => {
    let newId = Number(tourDetails[tourDetails.length - 1].id) + 1;
    let newTour = { id: newId, addedDate: req.requestTime, ...req.body };
    let updatedTourDetails = [...tourDetails, , newTour];
    fs.writeFile(dbPath, JSON.stringify(updatedTourDetails), (err) => {
      if (err) {
        res.status(401).json({
          statusbar: 'error',
          data: err,
        });
        res.end();
      }
      // 201 - Created
      res.status(201).json({
        status: 'success',
        data:newTour,
      });
    });
  };
  
exports.updateTour = (req, res) => {
    if (req.params.id) {
      let tour = tourDetails.filter((item) => item.id != req.params.id);
      if (tour.length == tourDetails.length) {
        res
          .status(404)
          .json({
            status: 'failed',
            message: 'Invalid ID',
          })
          .end();
      }
      let updatedTour = { id: req.params.id, ...req.body };
      fs.writeFile(dbPath, JSON.stringify([...tour, updatedTour]), (err) => {
        res.status(200).json({
          status: 'success',
          data: updatedTour,
        });
      });
    } else {
      res.status(404).json({
        status: 'Fail',
        message: 'Invalid ID',
      });
    }
  };

