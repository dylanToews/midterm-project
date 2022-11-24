const express = require('express');
const router = express.Router();

//Render Answers page

router.get('/incorrect', (req, res) => {
  console.log('answers');
  // res.send("answers");
  res.render('incorrect');
});

module.exports = router;

