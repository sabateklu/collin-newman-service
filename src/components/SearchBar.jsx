import React from 'react';
import Proptypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const SearchBar = ({ handleChangeFilterReviews, handleClickClearInput }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <IconButton edge={false} size="small">
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Input
              onChange={handleChangeFilterReviews}
              id="searchInput"
              label="With a grid"
              endAdornment={(
                <InputAdornment position="end" onClick={handleClickClearInput}>
                  <HighlightOffIcon />
                </InputAdornment>
              )}
            />
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  handleChangeFilterReviews: Proptypes.func.isRequired,
  handleClickClearInput: Proptypes.func.isRequired,
};

export default SearchBar;
