/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ReviewListControls from './ReviewListControls';
import SearchBar from './SearchBar';
import ReviewList from './ReviewList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      travelerRatings: {},
      currentPage: 0,
      loaded: false,
      reviewsBodyFilter: [],
      reviewsTravelerTypeFilter: [],
      reviewsTimeOfYearFilter: [],
      reviewsLanguageFilter: null,
    };
    this.helpfulClickHandler = this.helpfulClickHandler.bind(this);
    this.handleClickClearInput = this.handleClickClearInput.bind(this);
    this.handleChangeFilterBody = this.handleChangeFilterBody.bind(this);
    this.writeReview = this.writeReview.bind(this);
    this.handleChangeFilterTravelerType = this.handleChangeFilterTravelerType.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleClickClearInput() {
    this.setState({ reviewsBodyFilter: [] });
  }

  handleChangeFilterBody(searchInput) {
    const { reviewsBodyFilter } = this.state;
    this.setState({ reviewsBodyFilter: [...reviewsBodyFilter, searchInput] });
  }

  handleChangeFilterTravelerType() {
    const checkboxs = document.querySelectorAll('input:checked[name="travelerType"]');
    console.log('Checked:', checkboxs);
    const travelerTypes = [];
    checkboxs.forEach((box) => { travelerTypes.push(box.value); });
    console.log(travelerTypes);
    this.setState({ reviewsTravelerTypeFilter: travelerTypes });
  }

  handleChangeFilterTimeOfYear(timeOfYear) {
    const { reviewsTimeOfYearFilter } = this.state;
    this.setState({ reviewsTimeOfYearFilter: [...reviewsTimeOfYearFilter, timeOfYear] });
  }

  handleChangeFilterLanguage(language) {
    const { reviewsLanguageFilter } = this.state;
    this.setState({ reviewsLanguageFilter: [...reviewsLanguageFilter, language] });
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
    const start = pageNumber * 10 - 10;
    const end = pageNumber * 10;
    const filteredReviews = this.filterReviews();
    if (pageNumber === 0) {
      return { reviewsToRender: filteredReviews.slice(0, 10), allReviews: filteredReviews };
    }
    return { reviewsToRender: filteredReviews.slice(start, end), allReviews: filteredReviews };
  }

  filterReviews() {
    const {
      reviews,
      reviewsBodyFilter,
      reviewsLanguageFilter,
      reviewsTimeOfYearFilter,
      reviewsTravelerTypeFilter,
    } = this.state;

    const applyAllFilters = () => {
      let reviewsAfterFilter = reviews;
      for (let i = 0; i < 3; i += 1) {
        let reviewProp;
        let reviewFilter;
        if (i === 0) {
          reviewFilter = reviewsBodyFilter;
          reviewProp = 'reviewBody';
        }
        if (i === 1) {
          reviewFilter = reviewsTravelerTypeFilter;
          reviewProp = 'travelerType';
        }
        if (i === 2) {
          reviewFilter = reviewsTimeOfYearFilter;
          reviewProp = 'timeOfYear';
        }
        reviewsAfterFilter = reviewsAfterFilter.filter((review) => {
          let count = 0;
          for (let j = 0; j < reviewFilter.length; j += 1) {
            if (review[reviewProp].includes(reviewFilter[j])) {
              count += 1;
            }
          }
          if (count === reviewFilter.length) {
            return true;
          }
          return false;
        });
      }
      if (reviewsLanguageFilter) {
        reviewsAfterFilter = reviewsAfterFilter.filter((review) => (
          review.language === reviewsLanguageFilter
        ));
      }
      return reviewsAfterFilter;
    };
    return applyAllFilters();
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
    // const { length } = reviews;
    // const pages = Math.ceil(length / 10);
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
    this.setState({ travelerRatings, loaded });
  }

  writeReview(review) {
    console.log('New review', this.newReview);
    axios.post('/api/reviews', review)
      .then(() => {
        this.getData();
      })
      .catch((err) => console.log(err));
  }

  renderView() {
    const {
      reviews, travelerRatings, loaded, currentPage,
    } = this.state;

    const filteredReviews = this.getReviews(currentPage);
    const reviewsCount = filteredReviews.allReviews.length;
    if (reviews.length > 0 && loaded) {
      return (
        <>
          <ReviewListControls
            writeReview={this.writeReview}
            travelerRatings={travelerRatings}
            reviewsCount={reviewsCount}
            handleChangeFilterTravelerType={this.handleChangeFilterTravelerType}
          />
          <SearchBar
            handleChangeFilterReviews={this.handleChangeFilterBody}
            handleClickClearInput={this.handleClickClearInput}
          />
          <ReviewList
            helpfulClickHandler={this.helpfulClickHandler}
            reviewsToRender={filteredReviews.reviewsToRender}
            pages={filteredReviews.allReviews.length}
          />
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
