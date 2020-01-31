import React from 'react';
import Header from './components/Header.js';
import SearchForm from './components/SearchForm';
import CharacterCard from './components/CharacterCard';
import LocationCard from './components/LocationCard';
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';


 export default function App() {


  return (
    <main className='main-container'>
      <Header/>
      <Route exact path = '/search' component = {SearchForm} />
      <Route exact path='/CharacterCard' style={{border: '2px solid blue'}} component={CharacterCard}/>
      <Route exact path='/LocationCard' style={{border: '2px solid red'}} component={LocationCard} />
      <Route exact path = '/' component = {WelcomePage} />
    </main>
  );
}

