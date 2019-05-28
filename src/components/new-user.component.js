import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import axios from 'axios';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
};


export default class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  onCreateUser = e => {
    e.preventDefault();
    axios.post('http://localhost:4000/users/add', { username: this.state.username }, axiosConfig)
      .then(res => swal("Succesfully Saved", res.data.username, "success"))
      .catch(err => console.error(err));

    this.setState({
      username: ''
    });
    // window.location = '/';
  }

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="sm" className="pt-2">
          <Typography align="center" variant="h2" component="h3">
            Add New User
          </Typography>
          <form onSubmit={this.onCreateUser}>
            <div className="form-group">
              <TextField required className="form-control bg-white" id="filled-multiline-static-username" label="New User" multiline margin="normal" variant="outlined" value={this.state.username} onChange={this.onChangeUsername} />
            </div>
            <div className="form-group mt-5">
              <Button type="submit" variant="contained" color="primary">Add User</Button>
            </div>
          </form>
        </Container>
      </React.Fragment>
    )
  }
}

