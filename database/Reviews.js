const mongoose = require('mongoose');
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

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
