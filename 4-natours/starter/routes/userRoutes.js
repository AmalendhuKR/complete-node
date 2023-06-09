const express = require('express');
const userControllers = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/:id?')
  .get(userControllers.getUsers)
  .post(userControllers.createUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
