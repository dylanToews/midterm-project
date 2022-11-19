const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log('answers')
  res.send('answers');
});

module.exports = router;
