import { RadioGroup } from "@material-ui/core";
import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import BreakForm from "./new_breakForm";

class ScheduleBreak extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({ [event.target.name]: event.target.checked });
  };

  onRadioChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <Grid className="container" container spacing={3}>
        <Grid item xs={12}>
          <div>
            <BreakForm
              cart={this.props.cart}
              stepperHandler={this.props.stepperHandler}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default ScheduleBreak;
