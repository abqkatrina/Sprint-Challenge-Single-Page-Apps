  
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';
import WelcomePage from './components/WelcomePage';
import './index.css';



export default function App() {
  
  return (
    <main className="main-container">
      <Header />
           
      <div className='container'>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationsList} />
        <Route path='/episodes' component={EpisodeList}/>
      </div>

    </main>
  )
  
}