import React from 'react';
import Proptypes from 'prop-types';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <ReviewCard review={review} />
    ))}
  </div>
);

ReviewList.propTypes = {
  reviews: Proptypes.shape([{}]).isRequired,
};

export default ReviewList;
