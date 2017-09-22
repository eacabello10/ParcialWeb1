import React, {Component} from "react";

export default class searchBox extends Component{
	constructor(props){
		super(props);
	}

	onEnter(evt){
		console.log(evt.target.value);
		
	}
	render(){
		return(<div>
			<input type="text" 
			placeholder="search"
			onInput= {this.onEnter}/>
			</div>);
	}
}