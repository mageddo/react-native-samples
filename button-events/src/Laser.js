import React from "react";

export default class Laser extends React.Component {
	
	constructor(){
		super()
		this.activateLasers = this.activateLasers.bind(this);
		this.state = {styles: {backgroundColor: "green", color: "white"}}
	}
	
	activateLasers(e) {
		console.debug('activateLasers', e);
		if(this.state.styles.backgroundColor == "red"){
			this.setState({styles: {backgroundColor : "blue"}});
		}else{
			this.setState({styles: {backgroundColor : "red"}});
		}
	}

	render() {
		return (
			<button onClick={this.activateLasers} style={this.state.styles}>
				Activate Lasers
			</button>
		);
	}
}