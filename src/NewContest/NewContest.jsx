import React, { Component } from 'react';
import './NewContest.css';
import { myConfig } from './../config.js';

class NewContest extends Component{
  constructor() {
    super();
    this.state = {
          contestname: '',
          startdate: '',
          enddate: '',
          link: '',
          status: '',
          createdby: '',
          noofposts:'',
          lastactivity: ''
        }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  sendData = () => {
    fetch(myConfig.url+this.props.selectedTable, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json; charset=utf-8",
          //"Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(this.state)
    })
  }
  render(){
    const { contestname, startdate, enddate, link, createdby, noofposts, lastactivity } = this.state;
    return(
      <div className="floatingBox">
        <form>
          <div className="form-group">
            <label for="email">Contest Name:</label>
            <input type="text" className="form-control" name="contestname" value={contestname} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <label for="date">Start Date:</label>
            <input type="date" className="form-control" name="startdate" value={startdate} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <label for="date">End Date:</label>
            <input type="date" className="form-control" name="enddate" value={enddate} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <label for="link">Link:</label>
            <input type="url" className="form-control" name="link" value={link} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <label>Status:</label> <br />
            <input type="radio" name="status" value={'OPEN'} onChange={this.onChange} required/> OPEN <br />
            <input type="radio" name="status" value={'CLOSE'} onChange={this.onChange} required/> CLOSE
          </div>
          <div className="form-group">
            <label for="createdby">Created By:</label>
            <input type="text" className="form-control" name="createdby" value={createdby} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <label for="lastactivity">No. of Posts:</label>
            <input type="text" className="form-control" name="noofposts" value={noofposts} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <label for="lastactivity">Last Activity:</label>
            <input type="text" className="form-control" name="lastactivity" value={lastactivity} onChange={this.onChange} required  />
          </div>
          <button type="submit" className="btn submitButton" onClick={this.sendData}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewContest;
