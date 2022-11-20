const express = require('express');
const router = express.Router();

//Render Answers page

router.get('/answers', (req, res) => {
  console.log('answers');
  res.send("answers");
  //res.render('answers');
});

module.exports = router;

