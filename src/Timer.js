import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null,
      time: this.props.initTime,
      paused: false
    }

    console.log(this.state.paused);
  }

  toggleTimer = (event) => {
    this.state.paused ? this.startTimer() : this.pauseTimer();
  }

  startTimer = (event) => {
    const started = false;
    console.log(started);
    const intervalId = setInterval(this.timer, 1000);
    this.setState({
      paused: started,
      intervalId: intervalId
    })
  }

  pauseTimer = (event) => {
    const paused = true;
    console.log(paused);
    const clearId = clearInterval(this.state.intervalId);
    this.setState({
      paused: paused,
      intervalId: clearId
    })
  }

  timer = (event) => {
    const time = this.state.time;
    this.setState({
      time: time + 1
    })
  }

  resetTimer = (event) => {
    const zero = 0;
    const paused = true;
    const clearId = clearInterval(this.state.intervalId);
    this.setState({
      paused: paused,
      time: zero,
      intervalId: clearId
    })
  }

  adjustTime = (adjustment) => {
    const newTime = this.state.time;
    this.setState({
      time: newTime + adjustment
    })
  }

  componentDidMount = () => {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({
      intervalId: intervalId
    })
  }

  render() {
      return (
        <div>
          <h3>{this.props.name} Timer {!this.state.paused ? 'ON' : 'OFF'}</h3>
          <div>{this.state.time}</div>
          <button onClick={this.toggleTimer}>{!this.state.paused ? 'Pause' : 'Start'}</button>
          <button onClick={this.resetTimer}>Reset</button>
          <button onClick={()=>this.adjustTime(30)}>+30</button>
          <button onClick={()=>this.adjustTime(-30)}>-30</button>
        </div>
      );
  }
}

export default Timer;
