const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');


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


});





// router.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;


//   res.send(quizQueries.checkEmail(email));
// });



module.exports = router;
