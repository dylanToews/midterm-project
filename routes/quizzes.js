const express = require('express');
const router  = express.Router();

//Render quizzes page

router.get('/', (req, res) => {
  console.log('quizzes')
  res.send('quizzes');
  res.render('quizzes');
});

module.exports = router;
