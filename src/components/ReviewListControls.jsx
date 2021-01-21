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
import Modal from '@material-ui/core/Modal';
import Rating from '@material-ui/lab/Rating';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DropzoneArea } from 'material-ui-dropzone';
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
  paper: {
    position: 'absolute',
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #34E0A1',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  modalContainer: {
    width: '55%',
  },
}));

const ReviewListControls = (props) => {
  const classes = useStyles();
  const {
    reviewsCount, writeReview, travelerRatings, handleChangeFilterTravelerType,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = () => (
    <Card className={classes.paper}>
      <CardContent>
        <Typography>Rate your experience</Typography>
        <Rating
          max={5}
          className={classes.iconFilled}
          name="rating"
          icon={(
            <FiberManualRecordIcon />
          )}
        />
        <Typography>Leave a review</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" multiline />
        <Typography>Give your review a title</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Typography>When did you go?</Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">When</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={() => null}
            label="Time of year"
            defaultValue=""
          >
            <MenuItem value="Mar-May">Mar-May</MenuItem>
            <MenuItem value="Jun-Aug">Jun-Aug</MenuItem>
            <MenuItem value="Sep-Nov">Sep-Nov</MenuItem>
            <MenuItem value="Dec-Feb">Dec-Feb</MenuItem>
          </Select>
        </FormControl>
        <Typography>When did you go?</Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Who</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={() => null}
            label="Time of year"
            defaultValue=""
          >
            <MenuItem value="Families">Families</MenuItem>
            <MenuItem value="Couples">Couples</MenuItem>
            <MenuItem value="Solo">Solo</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Friends">Friends</MenuItem>
          </Select>
        </FormControl>
        <DropzoneArea
          acceptedFiles={['image/*']}
          dropzoneText="Drag and drop an image here or click"
          onChange={(files) => console.log('Files:', files)}
        />
        <Button className={classes.writeReview} variant="contained">Submit</Button>
      </CardContent>
    </Card>
  );

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
          <Button onClick={() => handleOpen()} className={classes.writeReview} variant="contained">
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {modalBody()}
      </Modal>
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
