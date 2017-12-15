import React, { Component } from 'react';
import Timer from './Timer';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      timers: [{
      name: 'Bacon',
      initTime: 0
    }]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Cooking Timers</h1>
        <Timer name={this.state.timers[0].name} initTime={this.state.timers[0].initTime} />

      </div>
    );
  }
}

export default App;
