import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      followers : []
    };
  }

componentDidMount(){
  fetch("getFollowers/eacabello10")
  .then((res) => res.json())
  .then((json) => console.log(json));
}

  render() {
    return (<div>
      {this.renderAuth()}
      <h1>Followers</h1>
      <User user={this.state.followers}/>
    </div>);
  }

export default App;
