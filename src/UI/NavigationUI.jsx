import React from 'react';
import 'Z:/WebVers/MyPortfolio/YourGift/gifft/src/App.css';
import { Link } from "react-router-dom";

function NavigationUI() {
	return ( 
		<>
		<div className='head'>
		<div className='head2'>
				<Link to="/main" className='listItem'><div>Главная</div></Link>
				<Link to="/specialPage" className='listItem'><div>Специальные предложения</div></Link>
				<Link to="/aboutUs" className='listItem'><div>О нас</div></Link>
				<Link to="/contacts" className='listItem'><div>Контакты</div></Link>
				
				
		</div>
		</div>
		
		</>
	 );
}

export default NavigationUI;