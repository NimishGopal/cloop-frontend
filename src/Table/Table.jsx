 import React, { Component } from 'react';
import './Table.css';

class TableElement extends Component {
  render() {
    var rowItem = this.props.table.map((item) =>
      <tr>
        <td>{item.contestname}</td>
        <td>{item.startdate}</td>
        <td>{item.enddate}</td>
        <td>{item.link}</td>
        <td>{item.status}</td>
        <td>{item.createdby}</td>
        <td>{item.noofposts}</td>
        <td>{item.lastactivity}</td>
      </tr>
    );
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Contest Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Contest Url</th>
            <th>Status</th>
            <th>Created by</th>
            <th>Number of posts</th>
            <th>Last Activity</th>
          </tr>
        </thead>
        <tbody>
          {rowItem}
        </tbody>
      </table>
    );
  }
}

export default TableElement;
