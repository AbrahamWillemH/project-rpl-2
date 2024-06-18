const express = require('express');
const { signupUser, loginUser, getUsers, updateUser } = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// Rute tanpa autentikasi
router.post('/signup', signupUser);
router.post('/login', loginUser);

// Terapkan middleware pada rute yang membutuhkan autentikasi
router.use(requireAuth);

router.get('/', getUsers);
router.put('/update').put(protect, updateUser);

module.exports = router;
