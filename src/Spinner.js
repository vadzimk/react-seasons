import React from "react";

//it will be a functional component

const Spinner = function(props){
	return (
	  <div className="ui active inverted dimmer">
	    <div className="ui text loader">{props.message}</div>
	  </div>
		);
};

//defaultProps property on the fucntion-object (or on some prototype i guess)
Spinner.defaultProps = {
	message: "Loading..."
}

export default Spinner;