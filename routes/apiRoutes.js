const router = require("express").Router()
const db = require('../models')
const Workout = require('../models/workouts');

router.post('/api/workout', ({body}, res) => {
  Workout.create(body).then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.status(404).json(err)
  })
})

router.post('/api/workout/bulk', ({body}, res) => {
  Workout.insertMany(body).then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err=> {
    res.status(404).json(err)
  })
})

router.get('/api/workout/:id')