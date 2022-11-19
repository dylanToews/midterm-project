const express = require('express');
const router  = express.Router();

router.get('/quizzes', (req, res) => {
  console.log('banana')
  res.send('something happened');
});

module.exports = router;
