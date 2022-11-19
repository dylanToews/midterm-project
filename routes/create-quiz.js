const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log('create quiz')
  res.send('create quiz');
});

module.exports = router;
