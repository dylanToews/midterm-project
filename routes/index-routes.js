const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/queries');

router.get('/', (req, res) => {
  res.render('index')
  quizQueries.getAllQuizzes()
    .then(users => {
      res.json({ users });
      console.log('getAllQuizzes function called')
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
