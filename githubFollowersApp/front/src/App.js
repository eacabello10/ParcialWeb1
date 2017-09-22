import React, { Component } from 'react';
import User from "./User/User.js";
import SearchBox from "./searchBox/SearchBox.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: [],
            getFollowersFrom: ""
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

    render() {
        return (<div>
          <h1>Followers</h1>
          <div>
            <SearchBox search={this.getFollowers.bind(this)}/>
          </div>
          <User followers={this.state.followers}/>
          </div>);
        }
}
export default App;