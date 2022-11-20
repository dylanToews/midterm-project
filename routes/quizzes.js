const express = require('express');
const router  = express.Router();
const testdb = require('./testdb')

//Render quizzes page

router.get('/quizzes/:id', (req, res) => {
  console.log(testdb)
  res.send('quizzes');
  //res.render('quizzes');
});

/* Load quiz based on id

user:id: req.session.user_id


*/

module.exports = router;
