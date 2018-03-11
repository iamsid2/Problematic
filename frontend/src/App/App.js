import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/hhtp-service';
import Problem from '../problem/problem';

const http = new HttpService();

class App extends Component {

  constructor(props){
      super(props);

      this.state = {problems:[]};

      //Bind functions
      this.loadData = this.loadData.bind(this);
      this.problemList = this.problemList.bind(this);

      this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProblems().then(data => {
      self.setState({problems:data});
    }, err => {

    });
  }

  problemList = () => {
    const list = this.state.problems.map((problem) =>
      <div className="row" key={problem._id}>
        <Problem problem = {problem}/>
      </div>

  );

  return (list);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className = "container-fluid App-main">
          <div className = "row">
            {this.problemList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
