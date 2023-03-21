const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const dbPath = `${__dirname}/../dev-data/data/tours-simple.json`;
const tourDetails = JSON.parse(fs.readFileSync(dbPath));

// 500 - Internal Server Error
exports.getUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'The route is not yet defined',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'The route is not yet defined',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'The route is not yet defined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'The route is not yet defined',
  });
};
