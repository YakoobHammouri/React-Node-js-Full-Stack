import React, { Component, forwardRef } from 'react';

import {
  Button,
  IconButton,
  Checkbox,
  Fab,
  TextField,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Paper,
  Tabs,
  Tab,
  Box,
  Typography,
  AppBar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Avatar,
  CardHeader,
} from '@material-ui/core';

import { Rating, Skeleton } from '@material-ui/lab';

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
// https://material-ui.com/customization/color/
import { purple, red, grey } from '@material-ui/core/colors';

import {
  Delete,
  Alarm,
  Add,
  Edit,
  AccountCircle,
  Person,
  Visibility,
  VisibilityOff,
  MoreVert,
} from '@material-ui/icons';

import DateFnsUtils from '@date-io/date-fns';

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const useStyles = (theme) => ({
  tabs: {
    backgroundColor: theme.palette.background.paper,
    width: 900,
  },
  cardroot: {
    maxWidth: 345,
  },
  cardmedia: {
    height: 140,
  },
  circularroot: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});

const useStyles2 = makeStyles((theme) => ({
  card: {
    width: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
}));

function Media(props) {
  const { loading = false } = props;
  const classes = useStyles2();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circle"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            '5 hours ago'
          )
        }
      />
      {loading ? (
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          title="Ted talk"
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

class MaterialUI extends Component {
  state = {
    checked: false,
    selectedDate: new Date('2014-08-18T21:11:54'),
    currency: null,
    currencies: [
      {
        value: 'USD',
        label: '$',
      },
      {
        value: 'EUR',
        label: '€',
      },
      {
        value: 'BTC',
        label: '฿',
      },
      {
        value: 'JPY',
        label: '¥',
      },
    ],
    password: '',
    showPassword: false,
    tab: null,
    open: false,
    rating: 2,
  };
  handleChange = (event) => {
    alert(event.target.value);
    //this.setState({ checked: event.target.checked });
  };

  handleDateChange = (date) => {
    console.log(date);
    this.setState({ selectedDate: date });
  };
  handleChangePass = (prop) => (event) => {
    this.setState({ password: event.target.value });
  };

  handleClickShowPassword = () => {
    const showPassword = this.state.showPassword;

    this.setState({
      showPassword: !showPassword,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  tabhandleChange = (event, newValue) => {
    this.setState({ tab: newValue });
  };

  tabhandleChangeIndex = (index) => {
    this.setState({ index });
  };

  a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  render() {
    const {
      checked,
      currencies,
      currency,
      password,
      showPassword,
      tab,
      selectedDate,
      open,
      rating,
    } = this.state;

    const { classes } = this.props;
    return (
      <div className="material">
        <div className="marg-div">
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
        <div className="marg-div">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </div>
        <div className="marg-div">
          <Button variant="contained" color="primary" startIcon={<Delete />}>
            Delete
          </Button>
        </div>
        <div className="marg-div">
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
          <IconButton aria-label="delete">
            <Alarm />
          </IconButton>
        </div>
        <div className="marg-div">
          <Checkbox
            checked={checked}
            onChange={this.handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
          <Checkbox
            disabled
            inputProps={{ 'aria-label': 'disabled checkbox' }}
          />
          <Checkbox
            disabled
            checked
            inputProps={{ 'aria-label': 'disabled checked checkbox' }}
          />
          <Checkbox
            defaultChecked
            indeterminate
            inputProps={{ 'aria-label': 'indeterminate checkbox' }}
          />
          <Checkbox
            defaultChecked
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          <Checkbox
            defaultChecked
            size="small"
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        </div>
        <div className="marg-div">
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <Edit />
          </Fab>
        </div>

        <section className="text-box">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="outlined"
          />

          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />

          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />

          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              value={currency}
              onChange={this.handleChange}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency-native"
              select
              label="Native select"
              value={currency}
              onChange={this.handleChange}
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>

          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <Person color="inherit" />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>

          <FormControl>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.handleChangePass('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </section>

        <div className="marg-div">
          <Card className={classes.cardroot}>
            <CardActionArea>
              <CardMedia
                className={classes.cardmedia}
                image="https://www.ris.org.in/sites/all/themes/ris/images/default-events.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h5"
                  fontWeight="fontWeightMedium"
                >
                  Coding for everyone
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="h6"
                  fontWeight="fontWeightMedium"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" startIcon={<Edit />}>
                Learn More
              </Button>
              <Button size="small" color="primary" startIcon={<Delete />}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="marg-div">
          <div className={classes.circularroot}>
            <CircularProgress />
            <CircularProgress color="secondary" />
          </div>
        </div>

        <div className="marg-div"></div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickOpen}
          >
            open dialog
          </Button>
          <Dialog
            open={open}
            TransitionComponent={this.Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <div className="marg-div">
          <h3>Avatar</h3>
          <Avatar className={classes.large}>H</Avatar>
        </div>

        <div className="marg-div">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                this.setState({ rating: newValue });
              }}
            />
          </Box>
        </div>

        <div className="marg-div load-com">
          <Media loading />
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(MaterialUI);
