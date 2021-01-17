import React from 'react';
import Proptypes from 'prop-types';
import ReviewCard from './ReviewCard';

const ReviewList = ({ reviews, helpfulClickHandler }) => (
  <div>
    {reviews.map((review) => {
      const { _id } = review;
      return (
        <ReviewCard
          review={review}
          helpfulClickHandler={helpfulClickHandler}
          key={String(_id)}
        />
      );
    })}
  </div>
);

ReviewList.propTypes = {
  reviews: Proptypes.arrayOf(Proptypes.shape({
    created_at: Proptypes.string,
    dateOfExperience: Proptypes.string,
    destination: Proptypes.string,
    helpfulVotes: Proptypes.number,
    images: Proptypes.arrayOf(Proptypes.string),
    profilePic: Proptypes.string,
    reviewBody: Proptypes.string,
    reviewTitle: Proptypes.string,
    starRating: Proptypes.number,
    userHomeLocation: Proptypes.string,
    userName: Proptypes.string,
    _id: Proptypes.string,
  })).isRequired,
  helpfulClickHandler: Proptypes.func.isRequired,
};

export default ReviewList;
