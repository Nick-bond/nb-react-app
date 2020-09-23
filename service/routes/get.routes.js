const { Router  } = require('express');
const Rating = require('../models/Rating');
const router = Router();

router.get('/rating', async (req, res) => {
  const rating = await Rating.find({ });

  return res.status(200).json(rating || []);
});

module.exports = router;
