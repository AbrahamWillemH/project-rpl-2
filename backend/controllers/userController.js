const User = require('../models/userModel')

// login user
const loginUser = async(req, res) => {
    res.json({mssg: 'Login'})
}

// signup user
const signupUser = async(req, res) => {
    res.json({mssg: 'Signup'})
}


module.exports = {signupUser, loginUser}