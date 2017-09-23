import React, { Component } from 'react';
import User from "./User/User.js";
import SearchBox from "./searchBox/SearchBox.js";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: [],
            getFollowersFrom: "",
            getRepositories: []
        };
    }

    getFollowers(userLogin)
    {
      var url = "getFollowers/" + userLogin;
      this.setState({
        getFollowersFrom :userLogin
      }),
      fetch(url)
      .then(res => res.json())
      .then(followers => 
        this.setState({followers: followers.data}));
    }

    getRepositories(url){
      fetch(url)
      .then(res => res.json())
      .then(repositories => 
        this.setState({getRepositories: repositories.data}));
    }

    render() {
        return (<div>
          <h1>Followers</h1>
          <div>
            <SearchBox getFollowers={this.getFollowers.bind(this)}/>
          </div>
          <User followers={this.state.followers} changeName={this.getFollowers.bind(this)} repositories={this.getRepositories.bind(this)}/>
          </div>);
        }
}
export default App;