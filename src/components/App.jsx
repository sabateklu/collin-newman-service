import React from 'react';
import ReviewListControls from './ReviewListControls';
import SearchBar from './SearchBar';
import ReviewList from './ReviewList';
import Pagination from './Pagination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ReviewListControls />
        <SearchBar />
        <ReviewList />
        <Pagination />
      </div>
    );
  }
}

export default App;
