import React, {Component} from "react";
import PropTypes from "prop-types";

 class Follower extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		var changeName = this.props.changeName;
		return(<div>
				<div className="box">
					<img  className = "imageAvatar" src={this.props.followers.avatar_url} alt=""/>
					<div className="login">Follower Login: <button onClick={() => changeName(this.props.followers.login)}>{this.props.followers.login}</button></div>
				</div>
			</div>);
			}
}

export default Follower;