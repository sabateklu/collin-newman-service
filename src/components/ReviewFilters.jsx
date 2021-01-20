import React from 'react';
import Proptypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontSize: '0.8rem',
  },
  typographyHeader: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    fontWeight: '600',
  },
  ratingRow: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  progressBarTrack: {
    backgroundColor: 'grey',
    /* (height of inner div) / 2 + padding */
    width: '15vw',
    padding: '0',
  },
  progressBarIndicator: {
    backgroundColor: 'black',
    width: '40%',
    height: '0.8rem',
  },

}));

const ReviewFilters = ({ travelerRatings }) => {
  const classes = useStyles();
  const { excellent, good, average, poor, terrible } = travelerRatings;
  const getProgress = () => {
    const max = Object.values(travelerRatings).reduce((acc, curVal) => (Math.max(acc, curVal)), 0);
    const diff = (num) => Math.abs(max - num);
    const round = (numDiff) => Math.floor((1 - (numDiff / max)) * max);
    return {
      excellent: round(diff(excellent)),
      good: round(diff(good)),
      average: round(diff(average)),
      poor: round(diff(poor)),
      terrible: round(diff(terrible)),
    };
  };

  const progressValues = getProgress();

  const RatingColumn = () => (
    <Grid item xs={4}>
      <Grid className={classes.ratingRow}>
        <Typography className={classes.typographyHeader}>Traveler rating</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Excellent</Typography>
        <div className={classes.progressBarTrack} data-testid="progressBar">
          <div className={classes.progressBarIndicator} />
        </div>
        <Typography className={classes.typography} component="p" data-testid="excellentCount">{travelerRatings.excellent}</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Good</Typography>
        <div className={classes.progressBarTrack} data-testid="progressBar">
          <div className={classes.progressBarIndicator} />
        </div>
        <Typography className={classes.typography} component="p" data-testid="goodCount">{travelerRatings.good}</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Average</Typography>
        <div className={classes.progressBarTrack} data-testid="progressBar">
          <div className={classes.progressBarIndicator} />
        </div>
        <Typography className={classes.typography} component="p" data-testid="averageCount">{travelerRatings.average}</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Poor</Typography>
        <div className={classes.progressBarTrack} data-testid="progressBar">
          <div className={classes.progressBarIndicator} />
        </div>
        <Typography className={classes.typography} component="p" data-testid="poorCount">{travelerRatings.poor}</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Terrible</Typography>
        <div className={classes.progressBarTrack} data-testid="progressBar">
          <div className={classes.progressBarIndicator} />
        </div>
        <Typography className={classes.typography} component="p" data-testid="terribleCount">{travelerRatings.terrible}</Typography>
      </Grid>
    </Grid>
  );

  const TravelerTypeColumn = () => (
    <Grid item xs={2}>
      <Grid className={classes.ratingRow}>
        <Typography className={classes.typographyHeader}>Traveler type</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Families</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Couples</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Solo</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Business</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Friends</Typography>
      </Grid>
    </Grid>
  );

  const TimeOfYearColumn = () => (
    <Grid item xs={2}>
      <Grid className={classes.ratingRow}>
        <Typography className={classes.typographyHeader}>Time of year</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Mar-May</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Jun-Aug</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Sep-Nov</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input type="checkbox" />
        <Typography className={classes.typography}>Dec-Feb</Typography>
      </Grid>
    </Grid>
  );

  const LanguageColumn = () => (
    <Grid item xs={2}>
      <Grid className={classes.ratingRow}>
        <Typography className={classes.typographyHeader}>Language</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input name="languageChoice" type="radio" />
        <Typography className={classes.typography}>All languages</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input name="languageChoice" type="radio" />
        <Typography className={classes.typography}>English</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input name="languageChoice" type="radio" />
        <Typography className={classes.typography}>Spanish</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input name="languageChoice" type="radio" />
        <Typography className={classes.typography}>French</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input name="languageChoice" type="radio" />
        <Typography className={classes.typography}>Italian</Typography>
      </Grid>
      <Grid className={classes.ratingRow}>
        <input name="languageChoice" type="radio" />
        <Typography className={classes.typography}>Italian</Typography>
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid container item xs={12} spacing={3}>
        <RatingColumn />
        <TravelerTypeColumn />
        <TimeOfYearColumn />
        <LanguageColumn />
      </Grid>
    </Grid>
  );
};

ReviewFilters.propTypes = {
  travelerRatings: Proptypes.shape({
    excellent: Proptypes.number,
    good: Proptypes.number,
    average: Proptypes.number,
    poor: Proptypes.number,
    terrible: Proptypes.number,
  }),
};

ReviewFilters.defaultProps = {
  travelerRatings: Proptypes.shape({
    excellent: 0,
    good: 0,
    average: 0,
    poor: 0,
    terrible: 0,
  }),
};

export default ReviewFilters;
