const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

// Read
router.get('/', UserController.getAllUsers);

// Create
router.post('/', UserController.createNewUser);

// Update
router.patch('/:idUser', UserController.updateUser);

// Delete
router.delete('/:idUser', UserController.deleteUser);

module.exports = router;