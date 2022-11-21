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


// router.get("/:id", (req, res) => {
//   const id = req.params.id

//       res.render("quizzes", id)


// });


module.exports = router;
