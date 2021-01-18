/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
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
      loaded: false,
      reviewsFilter: (val) => val,
    };
    this.helpfulClickHandler = this.helpfulClickHandler.bind(this);
    this.handleClickClearInput = this.handleClickClearInput.bind(this);
    this.handleChangeFilterReviews = this.handleChangeFilterReviews.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleClickClearInput() {
    document.getElementById('searchInput').value = '';
    this.setState({ reviewsFilter: (val) => val });
  }

  handleChangeFilterReviews() {
    const searchInput = document.getElementById('searchInput').value;
    this.setState({ reviewsFilter: (review) => (review.reviewBody.includes(searchInput)) });
  }

  getData() {
    // Im hardcoding the location for now
    axios.get(`/api/reviews/${'Bangkok'}`)
      .then((res) => {
        this.setState({ reviews: res.data });
        this.populateRatingsAndPages();
      })
      .catch((err) => console.log(err));
  }

  getReviews(pageNumber) {
    const { reviews, reviewsFilter } = this.state;
    const start = pageNumber * 10 - 10;
    const end = pageNumber * 10;
    const filteredReviews = reviews.filter((review) => reviewsFilter(review));
    if (pageNumber === 0) {
      return filteredReviews.slice(0, 9);
    }
    return filteredReviews.slice(start, end);
  }

  helpfulClickHandler(e) {
    const id = e.target.getAttribute('data-id');
    axios.patch(`/api/reviews/${id}`)
      .then(() => {
        this.getData();
      })
      .catch((err) => console.log(err));
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
    if (reviews.length > 0 && loaded) {
      return (
        <>
          <ReviewListControls travelerRatings={travelerRatings} />
          <SearchBar
            handleChangeFilterReviews={this.handleChangeFilterReviews}
            handleClickClearInput={this.handleClickClearInput}
          />
          <ReviewList
            helpfulClickHandler={this.helpfulClickHandler}
            reviews={reviewsToRender}
          />
          <Pagination pages={pages} />
        </>
      );
    }
    return <p>Loading...</p>;
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={6}>
          {this.renderView()}
        </Grid>
      </Grid>
    );
  }
}

export default App;
