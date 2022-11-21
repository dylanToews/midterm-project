const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/queries');

// router.get('/quizzes', (req, res) => {
//   quizQueries.getOneQuiz()
//     .then(users => {
//       res.json({ users });
//       console.log('getOneQuiz function called')
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });



router.get('/quiz/:id', (req, res) => {
  const id = req.params.id
  quizQueries.getQuizFromId(id)
    .then(result => {
      const templateVars = {
        quiz: result
      }
      console.log('quiz templatevars', templateVars)
      res.render('quiz', templateVars)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



module.exports = router;
