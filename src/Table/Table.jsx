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
            <th class="tableHead">Contest Name</th>
            <th class="tableHead">Start Date</th>
            <th class="tableHead">End Date</th>
            <th class="tableHead">Contest Url</th>
            <th class="tableHead">Status</th>
            <th class="tableHead">Created by</th>
            <th class="tableHead">Number of posts</th>
            <th class="tableHead">Last Activity</th>
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
