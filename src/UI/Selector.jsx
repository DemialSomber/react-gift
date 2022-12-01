import React from 'react';
import 'Z:/WebVers/MyPortfolio/YourGift/gifft/src/App.css';

function SelectorUI(props) {
	return ( 
		<>
		<select className='selector'>
			<option>{props.option1}</option>
			<option>{props.option2}</option>
		</select>
		</>
	 );
}

export default SelectorUI;