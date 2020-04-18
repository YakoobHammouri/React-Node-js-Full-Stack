import React, { Component } from 'react';

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
} from '@material-ui/core';

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
  Phone,
  PersonPin,
  ThumbUp,
} from '@material-ui/icons';

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

import DateFnsUtils from '@date-io/date-fns';

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const useStyles = (theme) => ({
  tabs: {
    backgroundColor: theme.palette.background.paper,
    width: 900,
  },
});

class TabsUI extends Component {
  state = {
    value: null,
    direction: 'ltr', //rtl
  };

  tabHtmlProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  tabhandleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { classes } = this.props;

    const { value, direction } = this.state;
    return (
      <div className="marg-div">
        <div className={classes.tabs}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.tabhandleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                label="Item One"
                icon={<Phone />}
                {...this.tabHtmlProps(0)}
                aria-label="phone"
              />
              <Tab
                label="Item Two"
                icon={<PersonPin />}
                {...this.tabHtmlProps(1)}
                aria-label="person"
              />
              <Tab
                label="Item Three"
                icon={<ThumbUp />}
                aria-label="down"
                {...this.tabHtmlProps(2)}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={this.tabhandleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1} dir={direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(TabsUI);
//export default TabsUI;
