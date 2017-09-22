import React, {Component} from "react";
import PropTypes from "prop-types";

import Follower from "../followers/Followers.js";

class User extends Component {
	constructor(props) {
		super(props);
	}

	renderFollowers() {
		return this.props.followers.map((g,i) => {
			return <Follower followers= {g} key={i} changeName={this.props.changeName.bind(this)} repositories={this.props.repositories.bind(this)}/>;
		});
	}

	render(){
		return(<div>
			{this.props.followers ? this.renderFollowers() : "Ingrese un usuario"}
			</div>);
	}
}

export default User;