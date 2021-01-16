import React from 'react';
import Proptypes from 'prop-types';

const ReviewFilters = ({ ratings }) => (
  <div>
    <div className="ratings">
      <h5>Traveler Rating</h5>
      <div className="rating-grid">
        <p>
          Excellent:
          {ratings.excellent}
        </p>
        <p>
          Very good:
          {ratings.good}
        </p>
        <p>
          Average:
          {ratings.average}
        </p>
        <p>
          Poor:
          {ratings.poor}
        </p>
        <p>
          Terrible:
          {ratings.terrible}
        </p>
      </div>
    </div>
  </div>
);

ReviewFilters.propTypes = {
  ratings: Proptypes.shape({
    excellent: Proptypes.number,
    good: Proptypes.number,
    average: Proptypes.number,
    poor: Proptypes.number,
    terrible: Proptypes.number,
  }),
};

ReviewFilters.defaultProps = {
  ratings: {
    excellent: 0,
    good: 0,
    average: 0,
    poor: 0,
    terrible: 0,
  },
};

export default ReviewFilters;
