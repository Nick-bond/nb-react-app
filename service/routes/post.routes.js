const { Router  } = require('express');
const Rating = require('../models/Rating');
const router = Router();

router.post('/rating/update', async (req, res) => {
  const { rating, id } = req.body;
  const item = await Rating.find({ id: id});

  if(item.length > 0) {
    await Rating.findOneAndUpdate({id}, { rating }, {new: true});
  } else {
    const updatedRating = new Rating({rating, id});
    await updatedRating.save();
  }

  return res.status(200).json({message: 'Rating was updated'});
});

module.exports = router;
