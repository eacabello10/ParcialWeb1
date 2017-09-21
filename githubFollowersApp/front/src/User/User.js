import React, {Component} from "react";
import PropTypes from "prop-types";

import Follower from "./followers/Follower.js";
class User extends Component {
	constructor(props) {
		super(props);
	}

	renderFollowers() {
		return this.props.followers.map((f,i) => {
			return <Follower follower= {f} key={i}/>;
		});
	}

	render(){
		return(<div>
			{this.renderFollowers()}
			</div>);
	}
}

User.propTypes = {
    user : PropTypes.array.isRequired
};

export default User;