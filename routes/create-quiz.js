const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');

//Render Create Quiz page

router.get('/create', (req, res) => {
  console.log('create quiz');
  res.render('create');
});

router.post('/create', (req, res) => {
  const {title, description, creator, email, question, answer, incorrect1, incorrect2, incorrect3} = req.body

  const private = !Boolean(req.body.private)

  console.log("inside route", private)

  quizQueries.addQuiz(title, description, private)
  .then (data => {
    console.log('inserted quiz record', data)
    const id = data.id
    // console.log
    return quizQueries.addQuestion(id, question, answer, incorrect1, incorrect2, incorrect3)
  })
  .then (data => {
    const id = data.id
    return quizQueries.addUserInfo(id, creator, email)
  })
  // .then (data => {
  //   const id = data.id
  //   return quizQueries.addPrivateBoolean(id, private)
  // })

  .then (data => {
//set cookie to questions id

    res.redirect('/')
  })
  //.catch (res.redirect("/create"))

})








module.exports = router;



