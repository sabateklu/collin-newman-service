import React from 'react';
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

const ReviewCard = ({ review }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          (
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={review.profilePic} alt="profile pic" />
            </Avatar>
          )
        }
        action={
          (
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          )
        }
        title={review.userName}
        subheader={`${review.userHomeLocation} ${review.created_at}`}
      />
      {review.images.map((image) => (
        <CardMedia
          className={classes.media}
          image={image}
          title="reviews pic"
        />
      ))}
      <CardContent>
        <Typography variant="h6" color="textPrimary" component="h6">
          {review.reviewTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {review.reviewBody}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="i found this helpful">
          <ThumbUpAltOutlinedIcon />
          <Typography variant="caption" color="textSecondary" component="p">
            Helpful
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
          <Typography variant="caption" color="textSecondary" component="p">
            Share
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

ReviewCard.propTypes = {
  review: Proptypes.shape({
    created_at: Proptypes.instanceOf(Date),
    dateOfExperience: Proptypes.instanceOf(Date),
    destination: Proptypes.string,
    helpfulVotes: Proptypes.number,
    images: Proptypes.string,
    profilePic: Proptypes.string,
    reviewBody: Proptypes.string,
    reviewTitle: Proptypes.string,
    starRating: Proptypes.number,
    userHomeLocation: Proptypes.string,
    userName: Proptypes.string,
  }).isRequired,
};

export default ReviewCard;
