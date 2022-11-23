const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');

//Render Create Quiz page

router.get('/create', (req, res) => {
  console.log('create quiz');
  res.render('create');
});

router.post('/create', (req, res) => {

  const {title, description, creator, email, question, answer, incorrect1, incorrect2, incorrect3 } = req.body

  console.log("req.body",req.body)
  console.log("question/answer", question, answer)

  // console.log(test)

  quizQueries.addQuiz(title, description)
  .then (data => {
    console.log('inserted quiz record', data)
    const id = data.id
    // console.lo
    return quizQueries.addQuestion(id, question, answer, incorrect1, incorrect2, incorrect3)


  })
  .then (data => {
    const id = data.id
    return quizQueries.addUserInfo(id, creator, email)

  })
  .then (data => {
//set cookie to questions id

    res.redirect('/')
  })

})








module.exports = router;



