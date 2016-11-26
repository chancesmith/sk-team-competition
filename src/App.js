import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import teamData from './team.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        team: teamData
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SKJackson Teams</h2>
        </div>
        <p className="App-intro">
          Winning Team: GOES HERE
        </p>
      </div>
    );
  }
}

export default App;
