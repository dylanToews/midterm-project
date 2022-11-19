const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log('quizzes')
  res.send('quizzes');
});

module.exports = router;
