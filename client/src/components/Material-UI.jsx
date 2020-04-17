import React, { Component } from 'react';

import { Button, IconButton, Checkbox, Fab } from '@material-ui/core';

import { Delete, Alarm, Add, Edit } from '@material-ui/icons';

import DateFnsUtils from '@date-io/date-fns';

import { KeyboardDatePicker } from '@material-ui/pickers';

export default class MaterialUI extends Component {
  state = {
    checked: false,
    selectedDate: new Date('2014-08-18T21:11:54'),
  };
  handleChange = (event) => {
    this.setState({ checked: event.target.checked });
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { checked, selectedDate } = this.state;

    return (
      <div className="material">
        <div>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
        <div>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" startIcon={<Delete />}>
            Delete
          </Button>
        </div>
        <div>
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
          <IconButton aria-label="delete">
            <Alarm />
          </IconButton>
        </div>
        <div>
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

        <div>
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <Edit />
          </Fab>
        </div>

        <div>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </div>
      </div>
    );
  }
}
