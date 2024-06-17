const express = require ('express')

// controller functions
const {signupUser, loginUser, getUsers} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

router.get('/login', getUsers)

// signup route 
router.post('/signup', signupUser)

module.exports = router