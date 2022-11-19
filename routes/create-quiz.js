const express = require('express');
const router = express.Router();

//Render Create Quiz page

router.get('/', (req, res) => {
  console.log('create quiz');
  res.send('create quiz');
  res.render('create');
});

module.exports = router;
