import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from "@date-io/date-fns";
import Button from '@material-ui/core/Button';
import { DatePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";


export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    debugger;
    this.setState({
      users: ['Quanit'],
      username: 'Quanit'
    })
  }


  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription = e => {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration = e => {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate = date => {
    this.setState({
      date
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }
    console.log(exercise);
    this.setState({
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
    });
    // window.location = '/';
  }

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="sm" className="pt-2">
          <Typography align="center" variant="h2" component="h3">
            Add Exercise
          </Typography>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <TextField required className="form-control" id="standard-select-name" ref="userInput" margin="normal" variant="outlined" select value={this.state.username} label="Select" onChange={this.onChangeUsername}>
                {
                  this.state.users.map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))
                }
              </TextField>
            </div>

            <div className="form-group">
              <TextField required className="form-control bg-white" id="filled-multiline-static-description" label="Add Exercises" multiline margin="normal" variant="outlined" value={this.state.description} onChange={this.onChangeDescription} />
            </div>

            <div className="form-group">
              <TextField type="number" required className="form-control bg-white" id="filled-multiline-static-duration" label="Duration (min)" margin="normal" variant="outlined" value={this.state.duration} onChange={this.onChangeDuration} />
            </div>

            <div className="form-group mt-4">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {/* <DatePicker required format="MM/dd/yyyy" className="form-control bg-white" inputVariant="outlined" value={this.state.date} onChange={this.onChangeDate} /> */}
                <KeyboardDatePicker id="filled-multiline-static-date" className="form-control bg-white" autoOk variant="inline" inputVariant="outlined" label="Date of Exercise" format="MM/dd/yyyy" value={this.state.date} onChange={this.onChangeDate} />
              </MuiPickersUtilsProvider>
            </div>

            <div className="form-group mt-5">
              <Button type="submit" variant="contained" color="primary">Add</Button>
            </div>

          </form>
        </Container>
      </React.Fragment>
    )
  }
}
