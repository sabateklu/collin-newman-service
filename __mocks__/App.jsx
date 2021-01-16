/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import ReviewListControls from './ReviewListControls';
import SearchBar from './SearchBar';
import ReviewList from './ReviewList';
import Pagination from './Pagination';
import sampleData from './sampleData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      travelerRatings: {},
      pages: 0,
    };
  }

  componentDidMount() {
    this.getData();
    console.log(this.state.reviews);
  }

  getData() {
    // Im hardcoding the location for now
    this.setState( reviews: sampleData );
  }

  populateRatingsAndPages() {
    const { reviews } = this.state;
    const { length } = reviews;
    const pages = Math.ceil(length / 5);
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

    this.setState({ travelerRatings, pages });
  }

  render() {
    const { reviews } = this.state;
    const { travelerRatings } = this.state;
    const { pages } = this.state;
    return (
      <div>
        <ReviewListControls travelerRatings={travelerRatings} />
        <SearchBar />
        <ReviewList reviews={reviews} />
        <Pagination pages={pages} />
      </div>
    );
  }
}

export default App;