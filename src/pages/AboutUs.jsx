import React from 'react';
import 'Z:/WebVers/MyPortfolio/YourGift/gifft/src/App.css';
import AboutUss from './AboutUs.jpg';
import NavigationUI from '../UI/NavigationUI';

function AboutUs() {
	return ( 
		<>
		<NavigationUI></NavigationUI>
		
		<h1>О нас</h1>
		<p>Наша компания была создана благодаря Мармеладке под руководством Пся Андреевича. <br/>Путем долгих проб и ошибок мы заявляем, что данный проект был закончен на X%.</p>

		<img src={AboutUss} className='photo' />
		<p>#Два дебила это сила</p>

		</>
	 );
}

export default AboutUs;