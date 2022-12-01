import React from 'react';
import 'Z:/WebVers/MyPortfolio/YourGift/gifft/src/App.css';
import YourGift from './YourGift.png';
import SelectorUI from '../UI/Selector';
import ButtonUI from '../UI/ButtonUI';
import Gifts from './Gifts';
import NavigationUI from '../UI/NavigationUI';
import { Link } from "react-router-dom";

function Main() {

	var valueRef = React.createRef();
	var valueRefOut = React.createRef();
	function inputVal() {
		valueRefOut.current.innerHTML = valueRef.current.value;
	}
	
	return ( 
		<>
		
		<NavigationUI></NavigationUI>
		<img src={YourGift} className='logo'/>

		<div className='divBorder'>

		<h1>Выберите пол</h1>
		<SelectorUI option1 = 'Мужской' option2 = 'Женский'/>
		<h1>Выберите возраст</h1>
		<div> 
		<input type='range' className='slider' min='0' max='100' defaultValue='0' onInput = {inputVal} ref={valueRef}></input>
		<h1 ref={valueRefOut}>0</h1>
		</div>
		
		
		<Link to="/gifts" className='myLink'><ButtonUI text='Подобрать подарок'></ButtonUI></Link>

		</div>

		</>
	 );
}

export default Main;