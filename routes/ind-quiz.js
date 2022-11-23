const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');


// create some function to shuffle the answer's position 
// we always have 4 choices :
function shuffle() {
  const array = [0, 1, 2, 3];
  return array.sort(() => Math.random() - 0.5);
}
const getOption= (option, order) => {
  const result = {}
  for (let i=0; i<4; i++) {
    result[`option${i}`] = option[`incorrect_${order[i]}`]
    if (order[i] == 0) {
      result[`option${i}`] = option[`correct_answer`]
    }
  }
  return result;
}

const shuffleQuestions = qObj => {
  const order = shuffle()
  const options = getOption (qObj, order)
  const result = {
    question_content: qObj.question_content,
    quiz_id: qObj.quiz_id,
    correct_answer: qObj.correct_answer,
    ...options,
    fullname: qObj.fullname,
    description: qObj.description,
    title: qObj.title,
    email: qObj.email,
    url: qObj.url,
    private: qObj.private,
    creator_id: qObj.creator_id
  }
  return result;
}


router.get('/quiz/:id', (req, res) => {
  const id = req.params.id;
  quizQueries.getQuizFromId(id)
    .then(result => {
      shuffleQuestions(result)
      const templateVars = {
        quiz: shuffleQuestions(result)
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
