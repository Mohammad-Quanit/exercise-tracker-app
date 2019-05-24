import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

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
    window.location = '/';
  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Typography variant="h2" component="h3">
          Add Exercise
        </Typography>
      </div>
    )
  }
}
