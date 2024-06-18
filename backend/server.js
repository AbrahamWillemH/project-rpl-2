require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const mealRoutes = require('./routes/meals');
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/articles');
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routing
app.use('/api/workouts', workoutRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/user', userRoutes);
app.use('/api/articles', articleRoutes);

// connect to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to MongoDB & Listening on Port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
