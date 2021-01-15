import React from 'react';
import ReviewFilters from './ReviewFilters';
import ReviewKeywords from './ReviewKeywords';

const ReviewListControls = () => (
  <div>
    <h1>Reviews</h1>
    <button type="button">Write a review</button>
    <ReviewFilters />
    <ReviewKeywords />
  </div>
);

export default ReviewListControls;
