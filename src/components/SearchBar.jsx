import React from 'react';
import Proptypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  handleChangeCheckedStatus() {
    if (document.getElementById('searchInput') !== '') {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }

  handleChangeReviews(e) {
    const { handleChangeFilterReviews } = this.props;
    handleChangeFilterReviews(e.target.value);
  }

  clearInput() {
    const { handleClickClearInput } = this.props;
    document.getElementById('searchInput').value = '';
    this.setState({ checked: false });
    handleClickClearInput();
  }

  render() {
    const { checked } = this.state;
    return (
      <form noValidate autoComplete="off">
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <IconButton edge={false} size="small">
                <SearchIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Input
                onChange={(e) => {
                  this.handleChangeReviews(e);
                  this.handleChangeCheckedStatus();
                }}
                id="searchInput"
                label="With a grid"
                endAdornment={(
                  <InputAdornment
                    position="end"
                    onClick={() => this.clearInput()}
                  >
                    <Fade in={checked}>
                      <IconButton edge={false} size="small" data-testid="clearSearchBtn">
                        <HighlightOffIcon />
                      </IconButton>
                    </Fade>
                  </InputAdornment>
                )}
              />
            </Grid>
          </Grid>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  handleChangeFilterReviews: Proptypes.func.isRequired,
  handleClickClearInput: Proptypes.func.isRequired,
};

export default SearchBar;
