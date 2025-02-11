const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ message: 'Welcome to Express Boilerplate!' });
});

module.exports = router;
