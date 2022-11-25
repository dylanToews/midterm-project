const express = require('express');
const router = express.Router();

//Render incorrect answer page

router.get('/incorrect', (req, res) => {
  res.render('incorrect');
});


module.exports = router;

