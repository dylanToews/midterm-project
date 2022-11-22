const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');
const frontJS = require('../public/scripts/app')



router.get('/quiz/:id', (req, res) => {
  const id = req.params.id;
  let thisFunction = frontJS.submitAnswer
  quizQueries.getQuizFromId(id)
    .then(result => {
      const templateVars = {
        quiz: result,
        myFunction: thisFunction
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
