import React, { Component } from 'react';
// import './Dropdown.css';
import TableElement from './../Table/Table.jsx';
import NewContest from './../NewContest/NewContest.jsx';


class DropdownElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTable: "testyytyyt",
      table: [],
      show: false
    };
  }
  componentDidUpdate() {
    fetch('http://127.0.0.1:4000/'+this.state.selectedTable)
    .then(res => res.json())
    .then((data) => this.setState({table: data}))
  }
  render() {
    return(
      <div>
        {this.props.show &&
          <div>
            <NewContest selectedTable={this.state.selectedTable}/>
          </div>
        }
        <div className="dropdown">
          <button className="btn dropdownBtn dropdown-toggle" type="button" data-toggle="dropdown">{this.state.selectedTable}
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li className="listItem"><a onClick={() => this.setState({selectedTable: "testyytyyt"})}>testyytyyt</a></li>
            <li className="listItem"><a onClick={() => this.setState({selectedTable: "lacasa"})}>La casa</a></li>
            <li className="listItem"><a onClick={() => this.setState({selectedTable: "moto"})}>Moto</a></li>
            <li className="listItem"><a onClick={() => this.setState({selectedTable: "mototo"})}>Mototo</a></li>
          </ul>
        </div>
        <div>
          <TableElement table={this.state.table}/>
        </div>
      </div>
    );
  }
}

export default DropdownElement;
