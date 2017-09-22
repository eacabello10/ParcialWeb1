import React, { Component } from 'react';
import User from "./User/User.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        };
    }

    componentDidMount() {
      fetch("getFollowers/eacabello10")
      .then(res => res.json())
      .then(followers => 
        this.setState({followers: followers.data}));
    }

    render() {
        return (<div>
          <h1>Followers</h1>
          <div>
          <searchBox />
          </div>
          <User followers={this.state.followers}/>
          </div>);
        }
}
export default App;