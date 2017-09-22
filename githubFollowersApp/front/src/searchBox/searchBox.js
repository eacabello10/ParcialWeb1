import React, {Component} from "react";

class SearchBox extends Component{
	constructor(props){
		super(props);
	}

	onEnter(evt){
		if (evt.key === 'Enter') {
      this.props.getFollowers(evt.target.value);
    	}
	}

	render(){
		return(<div>
			<input type="text" 
			placeholder="search"
			onKeyPress= {this.onEnter.bind(this)}/>
			</div>);
	}
}

export default SearchBox;