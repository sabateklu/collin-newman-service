import React from 'react';
import Proptypes from 'prop-types';
import ReviewCard from './ReviewCard';

const ReviewList = (props) => (
  <div>
    <ReviewCard />
    <ReviewCard />
  </div>
);

ReviewList.propTypes = {
  reviews: Proptypes.shape({
    created_at: Proptypes.instanceOf(Date),
    dateOfExperience: Proptypes.instanceOf(Date),
    destination: Proptypes.string,
    helpfulVotes: Proptypes.number,
    images: Proptypes.shape([Proptypes.string]),
    profilePic: Proptypes.string,
    reviewBody: Proptypes.string,
    reviewTitle: Proptypes.string,
    starRating: Proptypes.number,
    userHomeLocation: Proptypes.string,
    userName: Proptypes.string,
  }),
};

ReviewList.defaultProps = {
  reviews: Proptypes.shape({
    created_at: Date.now(),
    dateOfExperience: Date.now(),
    destination: 'Thailand',
    helpfulVotes: 0,
    images: [''],
    profilePic: '',
    reviewBody: '',
    reviewTitle: '',
    starRating: 5,
    userHomeLocation: '',
    userName: '',
  }),

};

export default ReviewList;
