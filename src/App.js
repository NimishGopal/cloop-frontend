import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown/Dropdown.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Your Contests</h1>
          <button type="button" class="btn newContestButton">NEW CONTEST</button>
        </div>
        <div className="dropdownMenu">
          <Dropdown />
        </div>
      </div>
    );
  }
}

export default App;
