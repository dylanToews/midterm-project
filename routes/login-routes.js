const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');
const session = require('express-session');

// Render login page


router.get("/login", (req, res) => {
  // if (req.session.user_id) {
  //   res.redirect("/");
  //   return;
  // }
  res.render("login", {user: null});
});


// Login existing user
router.post("/login", (req, res) => {

let email = req.body.email;
let password = req.body.password;
// Ensure the input fields exists and are not empty
quizQueries.checkEmailAndPassword(email, password)
  .then (data => {
    console.log('data', data)
    // if(error) throw error;

    if(data) {
      req.session.loggedin = true;
      req.session.username = data.fullName
      res.redirect('/')
    }
    if(!data) {
      res.send("Incorrect email and password combination")
    }
  })
})



  // results, fields) {
  //   console.log(results.rows[0])

  //   // If there is an issue with the query, output the error
  //   if (error) throw error;
  //   // If the account exists
  //   if (results.rows.length > 0) {

  //     req.session.loggedin = true;
  //     req.session.email = email;
  //     // Redirect to home page
  //     res.redirect('/');
  //   } else {
  //     res.send('Incorrect email and/or Password!');
  //   }
  //   res.end();
  // });
  // } else {
  // res.send('Please enter email and Password!');
  // res.end();
  // }
  // };


  // });


// router.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;


//   res.send(quizQueries.checkEmail(email));
// });



module.exports = router;
