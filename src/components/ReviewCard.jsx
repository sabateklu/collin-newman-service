import React from 'react';

const ReviewCard = () => (
  <div className="reviewCard">
    <div className="userInfo">
      <img alt="" />
      <p>Username</p>
      <p>Created At</p>
      <p>User HOme location</p>
    </div>
    <div className="reviewDetails">
      <p>Rating</p>
      <p>Title</p>
      <p>Body</p>
      <p>Date of visit</p>
      <p>Helpful votes counter</p>
    </div>
    <div className="reviewCardButtons">
      <button type="button">Helpful</button>
      <button type="button">Share</button>
    </div>
  </div>
);

export default ReviewCard;
