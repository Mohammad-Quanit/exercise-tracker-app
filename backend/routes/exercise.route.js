const router = require('express').Router();

let Exercise = require('../models/exercise.model');

// Exercises get request
router.route('/').get((req, res) => {
  Exercise.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error getting Users, ${err}`));
});

// Get Exercise by ID get request
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json(`Failed to Fetch single exercise, ${err}`))
});

// Delete Exercise by ID delete request
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => res.json(`Exercise Deleted, ${exercise}`))
    .catch(err => res.status(400).json(`Failed to Delete exercise, ${err}`))
});

// Update Exercise by ID put request
router.route('/update/:id').put((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const updatedExercise = {
    username,
    description,
    duration,
    date
  };
  Exercise.findByIdAndUpdate(req.params.id, { $set: updatedExercise })
    .then(exercise => res.json(`Exercise Updated, ${exercise}`))
    .catch(err => res.status(400).json(`Failed to Update exercise, ${err}`))
});

// Exercises post request
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });
  newExercise.save()
    .then(exercise => res.json(`Exercise added, ${exercise}`))
    .catch(err => res.status(400).json(`User Save Failed, ${err}`))
});

module.exports = router;