/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import ReviewListControls from './ReviewListControls';
import SearchBar from './SearchBar';
import ReviewList from './ReviewList';
import Pagination from './Pagination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      travelerRatings: {},
      pages: 0,
      currentPage: 0,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // Im hardcoding the location for now
    axios.get(`/api/reviews/${'Bangkok'}`)
      .then((res) => {
        console.log('Setting staet');
        this.setState({ reviews: res.data });
        console.log('got data');
        this.populateRatingsAndPages();
        console.log('Pupulated state');
      })
      .catch((err) => console.log(err));
  }

  getReviews(pageNumber) {
    const { reviews } = this.state;
    const start = pageNumber * 10 - 10;
    const end = pageNumber * 10;
    if (pageNumber === 0) {
      return reviews.slice(0, 9);
    }
    return reviews.slice(start, end);
  }

  populateRatingsAndPages() {
    const { reviews } = this.state;
    const { length } = reviews;
    const pages = Math.ceil(length / 10);
    const ratings = reviews.reduce((acc, currentValue) => (
      acc.concat([currentValue.starRating])
    ), []);

    const ratingDefinitions = {
      5: 'excellent',
      4: 'good',
      3: 'average',
      2: 'poor',
      1: 'terrible',
    };

    const travelerRatings = ratings.reduce((acc, currentValue) => {
      if (acc[ratingDefinitions[String(currentValue)]] === undefined) {
        acc[ratingDefinitions[String(currentValue)]] = 1;
      } else {
        acc[ratingDefinitions[String(currentValue)]] += 1;
      }
      return acc;
    }, {});
    const loaded = true;
    this.setState({ travelerRatings, pages, loaded });
  }

  renderView() {
    const {
      reviews, travelerRatings, pages, loaded, currentPage,
    } = this.state;

    const reviewsToRender = this.getReviews(currentPage);
    console.log(reviewsToRender);
    if (reviews.length > 0 && loaded) {
      return (
        <>
          <ReviewListControls travelerRatings={travelerRatings} />
          <SearchBar />
          <ReviewList reviews={reviewsToRender} />
          <Pagination pages={pages} />
        </>
      );
    }
    return <p>Loading...</p>;
  }

  render() {
    return (
      <div className="main">
        {this.renderView()}
      </div>
    );
  }
}

export default App;
