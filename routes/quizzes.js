const express = require('express');
const router  = express.Router();
//const testdb = require('./testdb')

//Test database

const quizDatabase = {
  quiz1: 'rep q1',
  quiz2: 'rep q2'
};


//Render quizzes page

router.get('/quizzes/:quiz2', (req, res) => {
  const params = req.params
  console.log(params)
  const templateVars = {
    quizDatabase
  }
  console.log('db', templateVars)

  res.render("testquizzes", templateVars);
});


/* Load quiz based on id




*/

module.exports = router;
