const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/queries');
const session = require('express-session');

// Render login page

router.get("/login", (req, res) => {
  res.render("login", { user: null });
});


// Login existing user
router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  
  quizQueries.checkEmailAndPassword(email, password)
    .then(data => {
      console.log('data', data);
      if (data) {
        req.session.loggedin = true;
        req.session.username = data.fullName;
        res.redirect('/');
      }
      if (!data) {
        res.send("Incorrect email and password combination");
      }
    });
});



module.exports = router;
