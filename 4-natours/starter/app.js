//* eslint-disable */
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());

// accessing the static files
app.use('/static', express.static(`${__dirname}/public/`));

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// middlewares
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
