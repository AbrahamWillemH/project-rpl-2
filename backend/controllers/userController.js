const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id: _id }, process.env.SECRET_TOKEN, { expiresIn: '3d' });
};

// login user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);
        // create token
        const token = createToken(user._id);
        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// signup user
const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.signup(username, email, password);
        // create token
        const token = createToken(user._id);
        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
};

module.exports = { signupUser, loginUser, getUsers };
