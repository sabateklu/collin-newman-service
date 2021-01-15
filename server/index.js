const express = require('express');
const parser = require('body-parser');
const Reviews = require('../database/Reviews.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(parser());

app.get('/api/reviews', (req, res) => {
  Reviews.findAll((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/reviews', (req, res) => {
  const newReview = {
    userName: req.body.userName,
    created_at: Date.now(),
    userHomeLocation: req.body.userHomeLocation,
    images: [...JSON.parse(req.body.images)],
    starRating: req.body.starRating,
    reviewTitle: req.body.reviewTitle,
    reviewBody: req.body.reviewBody,
    dateOfExperience: req.body.dateOfExperience,
    helpfulVotes: 0,
  };
  Reviews.create(newReview, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.patch('/api/reviews/:id', (req, res) => {
  Reviews.incHelpfulCounter(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
