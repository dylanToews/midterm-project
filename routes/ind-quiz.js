const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/queries');

router.get('/quizzes', (req, res) => {
  quizQueries.getOneQuiz()
    .then(users => {
      res.json({ users });
      console.log('getOneQuiz function called')
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
