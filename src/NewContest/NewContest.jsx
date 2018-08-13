import React, { Component } from 'react';
import './NewContest.css';

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
        };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  sendData = () => {
    const data = JSON.stringify(this.state);
    fetch('http://127.0.0.1:4000/'+this.props.selectedTable, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data,
    });
  }
  render(){
    console.log('http://127.0.0.1:4000/'+this.props.selectedTable);
    const { contestname, startdate, enddate, link, status, createdby, noofposts, lastactivity } = this.state;
    return(
      <div className="container floatingBox">
        <form>
          <div className="form-group">
            <label for="email">Contest Name:</label>
            <input type="text" className="form-control" name="contestname" value={contestname} onChange={this.onChange}  />
          </div>
          <div className="form-group">
            <label for="date">Start Date:</label>
            <input type="date" className="form-control" name="startdate" value={startdate} onChange={this.onChange}  />
          </div>
          <div className="form-group">
            <label for="date">End Date:</label>
            <input type="date" className="form-control" name="enddate" value={enddate} onChange={this.onChange}  />
          </div>
          <div className="form-group">
            <label for="link">Link:</label>
            <input type="url" className="form-control" name="link" value={link} onChange={this.onChange}  />
          </div>
          <div className="form-group">
            <label>Status:</label> <br />
            <input type="radio" name="status" name="status" value={'OPEN'} onChange={this.onChange} /> OPEN <br />
            <input type="radio" name="status" name="status" value={'CLOSE'} onChange={this.onChange} /> CLOSE
          </div>
          <div className="form-group">
            <label for="createdby">Created By:</label>
            <input type="text" className="form-control" name="createdby" value={createdby} onChange={this.onChange}  />
          </div>
          <div className="form-group">
            <label for="lastactivity">No. of Posts:</label>
            <input type="text" className="form-control" name="noofposts" value={noofposts} onChange={this.onChange}  />
          </div>
          <div className="form-group">
            <label for="lastactivity">Last Activity:</label>
            <input type="text" className="form-control" name="lastactivity" value={lastactivity} onChange={this.onChange}  />
          </div>
          <button type="submit" className="btn submitButton" onClick={this.sendData}>Submit</button>
          <button type="submit" className="btn submitButton">Cancel</button>
        </form>
      </div>
    );
  }
}

export default NewContest;
