const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

const reviewSchema = new mongoose.Schema({
  userName: String,
  created_at: { type: Date, default: Date.now },
  userHomeLocation: String,
  images: [String],
  starRating: Number,
  reviewTitle: String,
  reviewBody: String,
  dateOfExperience: Date,
  helpfulVotes: Number,
});

const Reviews = mongoose.model('Review', reviewSchema);

const findAll = (cb) => {
  Reviews.find({}, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const create = (review, cb) => {
  Reviews.create(review, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

const incHelpfulCounter = (reviewId, cb) => {
  const id = { _id: reviewId };
  const update = { $inc: { helpfulVotes: 1 } };

  Reviews.findByIdAndUpdate(id, update, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = {
  findAll,
  create,
  incHelpfulCounter,
};
