import React, {Component} from "react";
import PropTypes from "prop-types";

import Follower from "../followers/Followers.js";

class User extends Component {
	constructor(props) {
		super(props);
	}

	renderFollowers() {
		return this.props.followers.map((g,i) => {
			return <Follower followers= {g} key={i}/>;
		});
	}

	render(){
		return(<div>
			{this.renderFollowers()}
			</div>);
	}
}

export default User;