import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			latitude: null,
			errorMessage: "",
		};
	}

//could initialize state outside of constructor and get rid of constructor entirely (super will be automatically called without it for you by JavaScript)
	// state = {
	// 		latitude: null,
	// 		errorMessage: "",
	// 	};


	componentDidMount(){
		console.log("My component has been rendered to the screen");

				//find the users geolocation https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
		//the callback function will call this.setState to uptate the state object and it will cause react to rerender the app component
	window.navigator.geolocation.getCurrentPosition(
		(position)=> {this.setState({latitude: position.coords.latitude})},
		//handle and error by adding a new property to the state object 
	 	(error)=> {this.setState({errorMessage: error.message})});
	}

	
	componentDidUpdate(){
		console.log("My component has been updated and rerendered");
	}

	//put logic of delivering content on a helper-method:
	renderContent(){
		//conditional rendering:	
		if (this.state.errorMessage && !this.state.latitude){
			return (<div>Error: {this.state.errorMessage}</div>);
		}
		if (!this.state.errorMessage && this.state.latitude){
			return <SeasonDisplay lat={this.state.latitude}/>;
		}
		return (<Spinner message="Please accept location request..."/>);	
	}

	//render method is required by react for a class component
	render(){
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
			);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));