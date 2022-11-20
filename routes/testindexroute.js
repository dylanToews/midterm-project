//////TEST INDEX ROUTE

const express = require('express');
const router = express.Router();

//Render Index page

router.get('/', (req, res) => {
  console.log('test index route');
  res.render('testindex');
});







module.exports = router;

