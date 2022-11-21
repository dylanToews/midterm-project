const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/queries');

//Route working to get quiz data

// router.get('/', (req, res) => {
//   quizQueries.getAllQuizzes()
//     .then(users => {
//       res.json({ users });
//       console.log('getAllQuizzes function called')

//       res.render('index')
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

router.get('/', (req, res) => {
  //res.render('index')
  quizQueries.getAllQuizzes()
    .then(result => {
      const dataObj = result
      const templateVars = {
        quizzes : result

      }
      //const test = 'this is a test'
      console.log(result)
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
