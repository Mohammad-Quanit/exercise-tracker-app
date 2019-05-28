import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from "@date-io/date-fns";
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import swal from 'sweetalert';
import axios from 'axios';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
};

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/', axiosConfig)
      .then(res => {
        this.setState({
          exercises: res.data
        })
      })
      .catch(err => console.error(err));
  }


  deleteExercise = id => {

  }

  editExercise = id => {

  }

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="sm" className="pt-2">
          <Typography align="center" variant="h2" component="h3">
            Add Exercise
          </Typography>
          <TextField required className="form-control" id="standard-select-name" ref="userInput" margin="normal" variant="outlined" select value={this.state.username} label="Select" onChange={this.onChangeUsername}>
            {
              this.state.users.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))
            }
          </TextField>
        </Container>
      </React.Fragment>
    )
  }
}
