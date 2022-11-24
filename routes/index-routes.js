const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/queries');

//Route working to get quiz data


router.get('/', (req, res) => {
  //res.render('index')
  quizQueries.getAllQuizzes()
    .then(result => {
      const templateVars = {
        quizzes : result

      }
      //const test = 'this is a test'
      console.log('index template vars', templateVars)
      res.render('index', templateVars);
      //res.json({ result })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});





module.exports = router;
