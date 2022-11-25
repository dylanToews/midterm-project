const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/queries');

//Renders home page

router.get('/', (req, res) => {
  quizQueries.getAllQuizzes()
    .then(result => {
      const templateVars = {
        quizzes : result
      }
      res.render('index', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
