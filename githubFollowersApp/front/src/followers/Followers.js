import React, {Component} from "react";
import PropTypes from "prop-types";

 class Follower extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(<div>
			<div className="login">Follower Login: <a href={this.props.followers.followers_url}>{this.props.followers.login}</a></div>
			</div>);
			}
}

export default Follower;