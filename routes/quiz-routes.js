const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');
const helpers = require('../public/scripts/app');


//Route to render quiz page 

router.get('/quiz/:id', (req, res) => {
  const id = req.params.id;

  quizQueries.getQuizFromId(id)
    .then(result => {
      helpers.shuffleQuestions(result);
      const templateVars = {
        quiz: helpers.shuffleQuestions(result)
      };
      res.render('quiz', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
