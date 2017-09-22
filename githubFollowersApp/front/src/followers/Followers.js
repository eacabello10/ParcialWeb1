import React, {Component} from "react";
import PropTypes from "prop-types";

 class Follower extends Component {
	constructor(props) {
		super(props);
	}

	showRepositories(repos,url){
		repos(url);
	}

	render(){
		var changeName = this.props.changeName;
		var showRepositories = this.showRepositories;
		var repositories = this.props.repositories;
		return(<div>
				<div className="box">
					<img  className = "imageAvatar" src={this.props.followers.avatar_url} alt=""/>
					<div className="login">Follower Login: <button onClick={() => changeName(this.props.followers.login)}>{this.props.followers.login}</button></div>
					<div className="RepoBlock">
						{this.props.getRepositories ? <a href={this.props.getRepositories.html_url}>{this.props.getRepositories.name}</a> : 
						<button className="showRepos" onClick={() => showRepositories(repositories,this.props.followers.repos_url)}>Show Repositories</button>}
					</div>
				</div>
			</div>);
			}
}

export default Follower;