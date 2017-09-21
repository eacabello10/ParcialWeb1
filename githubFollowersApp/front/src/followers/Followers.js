import React, {Component} from "react";
import PropTypes from "prop-types";

 class Follower extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(<div>
			<div className="login">Follower Login: {this.props.Follower.login}</div>
			}
}

Follower.propTypes = {
    follower : PropTypes.object.isRequired
};

export default Follower;