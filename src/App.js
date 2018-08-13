import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown/Dropdown.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Your Contests</h1>
          <button type="button" class="btn newContestButton" onClick={() => this.setState({show: true})}>NEW CONTEST</button>
        </div>
        <div className="dropdownMenu">
          <Dropdown show={this.state.show}/>
        </div>
      </div>
    );
  }
}

export default App;
