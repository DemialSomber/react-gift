import './App.css';
import React from 'react';
import Main from './pages/Main';
import Gifts from './pages/Gifts';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import SpecialPage from './pages/SpecialPage';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';


function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route exact path='/gifts' element = {<Gifts />} />
			<Route exact path='/specialPage' element = {<SpecialPage />} />
			<Route exact path='/aboutUs' element = {<AboutUs />} />
			<Route exact path='/contacts' element = {<Contacts />} />
			<Route path='/main' element = {<Main />} />
			<Route path="*" element={<Navigate to="/main" replace /> } />
		</Routes>
			
    </BrowserRouter>
  );
}

export default App;
