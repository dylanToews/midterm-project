const express = require('express');
const router = express.Router();

//Render Index page

router.get('/', (req, res) => {
  console.log('index');
  res.render('index');
});







module.exports = router;
