const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');



router.get('/quiz/:id', (req, res) => {
  const id = req.params.id;
  quizQueries.getQuizFromId(id)
    .then(result => {
      const templateVars = {
        quiz: result,
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
