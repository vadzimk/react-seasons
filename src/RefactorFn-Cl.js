import React from "react";
import ReactDom from "react-dom";

const UserForm = function() {
	return (
		<form>
			<label></label>
			<input />
		</form>
		);
}

ReactDom.render(<UserForm />, document.querySelector("#root"));

class UserForm extends React.Component{
	constructor(){
		super();

		this.state = {};
	}

	render(){
		return (
			<form>
				<label></label>
				<input />
			</form>
			);
	}
}