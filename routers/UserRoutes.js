const express = require('express');
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

// as rotas para cada request e as callbacks do Controller

router.post('/', createUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
