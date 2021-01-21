import React from 'react';
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ReviewFilters from './ReviewFilters';
import ReviewKeywords from './ReviewKeywords';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  iconFilled: {
    color: '#34E0A1',
  },
  writeReview: {
    marginTop: '2vh',
    marginRight: '2vw',
  },
}));

const ReviewListControls = (props) => {
  const classes = useStyles();
  const { reviewsCount, writeReview, travelerRatings, handleChangeFilterTravelerType } = props;
  return (
    <Card>
      <CardHeader
        avatar={(
          <Avatar aria-label="paper and pencil" className={classes.avatar}>
            <RateReviewIcon />
          </Avatar>
        )}
        title={(
          <Typography variant="subtitle1" color="textPrimary" component="div">
            Reviews
          </Typography>
        )}
        subheader={(
          <Typography data-testid="reviewCount" display="inline" variant="caption" color="textSecondary" component="p">
            {`${reviewsCount}`}
          </Typography>
        )}
        action={(
          <Button onClick={() => writeReview()} className={classes.writeReview} variant="contained">
            Write a review.
          </Button>
        )}
      />
      <CardContent>
        <Divider />
        <ReviewFilters
          travelerRatings={travelerRatings}
          handleChangeFilterTravelerType={handleChangeFilterTravelerType}
        />
        <ReviewKeywords />
      </CardContent>
    </Card>
  );
};

ReviewListControls.propTypes = {
  reviewsCount: Proptypes.number.isRequired,
  travelerRatings: Proptypes.shape({
    excellent: Proptypes.number,
    good: Proptypes.number,
    average: Proptypes.number,
    poor: Proptypes.number,
    terrible: Proptypes.number,
  }).isRequired,
  writeReview: Proptypes.func.isRequired,
  handleChangeFilterTravelerType: Proptypes.func.isRequired,
};

export default ReviewListControls;
