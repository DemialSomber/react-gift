import React from 'react';
import 'Z:/WebVers/MyPortfolio/YourGift/gifft/src/App.css';
import Lego from '../imgGift/children/Lego.jpg';
import Shut from '../imgGift/children/Shut.jpg';
import Konki from '../imgGift/children/konki.jpg';
import Kvadrik from '../imgGift/children/Kvadrik.jpg';
import Xbox from '../imgGift/children/xbox-series-s.jpg';
import NavigationUI from '../UI/NavigationUI';
function SpecialPage() {

	const imgGifts = [
		{name: Lego, title: 'Набор лего', text: 'Конструктор Датской компании "Lego" подрят эмоции любому ребенку. И не только ребенку.', price: '150$'},
		{name: Shut, title: 'Новогодний костюм', text: 'Подарите настроение ребенку купив рождественный костюм. Кто знает, может он станет новым Сантой.', price: '100$'},
		{name: Konki, title: 'Детские коньки', text: 'Пошло поехало это про коньки. Лезвие на стопе позволит рассекать лёд и лицо деду. 10 из 10.', price: '50$'},
		{name: Kvadrik, title: 'Квадракоптер', text: 'Если вы богатый, что хватит на квадракоптер, то зачем вы тут сидите? В любом случае, мини-вертолет подарит кучу эмоций и заснимет как ваш ребенок свалиться в сугроб пока будет идти за ним.', price: '400$'},
		{name: Xbox, title: 'Игровая консоль Microsoft Xbox Series S', text: 'Хотите заткнуть вашего ребенка на ближайшие пару недель? Купите эту консоль. Правда к ней нужен телевизор, но это мелочи. Тишина стоит своих денег.', price: '500$'},
	]
	return ( 
		<>
		<NavigationUI></NavigationUI>
		
		<h1>Специальные предложения</h1>
		
		<h1 style={{color: 'red'}}>Подарки ребенку</h1>
		
		{imgGifts.map(imgs => 
		<div className='borderGiftDiv'>
			<img src={imgs.name} className='imgGift'/>
			<h3>{imgs.title}</h3>
			<h3>Примерная цена: {imgs.price}</h3>
			<p>{imgs.text}</p>
		</div>
		)}
		<h1 style={{color: 'red'}}>Подарки подростку <br/> Потом доделаю</h1>
		</>
	 );
}

export default SpecialPage;