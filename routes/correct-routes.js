const express = require('express');
const router = express.Router();

//Render Answers page

router.get('/correct', (req, res) => {
  console.log('answers');
  res.render("correct");
});

module.exports = router;
