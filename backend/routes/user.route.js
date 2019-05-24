const router = require('express').Router();

let User = require('../models/user.model');

// Users get request
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.sendStatus(400).json(`Error getting Users, ${err}`));
});

// Users post request
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });
  newUser.save()
    .then(user => res.json(`User added, ${user}`))
    .catch(err => res.status(400).json(`User Save Failed, ${err}`))
});

module.exports = router;