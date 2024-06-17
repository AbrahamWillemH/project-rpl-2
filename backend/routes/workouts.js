const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

// GET All Workout
router.get('/', getWorkouts)

// GET 1 Workout
router.get('/:id', getWorkout)
// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id',deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router