const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');

//Render Create Quiz page

router.get('/create', (req, res) => {
  console.log('create quiz');
  res.render('create');
});

//Post new quiz content and add to database
router.post('/create', (req, res) => {
  const { title, description, creator, email, question, answer, incorrect1, incorrect2, incorrect3 } = req.body;
  const private = !Boolean(req.body.private);
  quizQueries.addQuiz(title, description, private)

    .then(data => {
      const id = data.id;
      return quizQueries.addQuestion(id, question, answer, incorrect1, incorrect2, incorrect3);
    })
    .then(data => {
      const id = data.id;
      return quizQueries.addUserInfo(id, creator, email);
    })
    .then(data => {
      res.redirect('/');
    });
});








module.exports = router;



