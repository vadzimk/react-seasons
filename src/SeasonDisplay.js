import "./SeasonDisplay.css"
import React from "react";
//the logic usually is put outside of the component, so that it's code is not exported without necessity

const seasonConfig = {
	summer: {text: "Let's hit the beach", iconName: "sun"},
	winter: {text: "Brr, it is chilly", iconName: "snowflake"},
}

const getSeason = function(lat, month){
	if (month>2 && month<9){
		return lat>0 ? "summer" : "winter";
	} else {
		return lat>0 ? "winter" : "summer";
	}
}

const SeasonDisplay = function(props){
	const season = getSeason(props.lat, new Date().getMonth());
	const {text, iconName} = seasonConfig[season]; //gives an object and destructures it
	return (
		<div className={`season-display ${season}`}>
		<i className={`${iconName} icon massive icon-left`} />
		<h1>{text}</h1>
		<i className={`${iconName} icon massive icon-right`} />
		</div>
		);
}

export default SeasonDisplay;