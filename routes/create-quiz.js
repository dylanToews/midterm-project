const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');

//Render Create Quiz page

router.get('/create', (req, res) => {
  console.log('create quiz');
  res.render('create');
});

router.post('/create', (req, res) => {



})








module.exports = router;



