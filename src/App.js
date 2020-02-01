import React from 'react';
import Header from './components/Header';
import { Link, Router, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import SearchForm from './components/SearchForm';
import './index.css';



 export default function App() {

  return (
    <main className="main-container">
      
      <nav className="navbar">
        <h1 className="title">Rick &amp; Morty's Book of Faces</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/characters'>Characters</Link></li>
          <li><Link to='/locations'>Locations</Link></li>
          <li><SearchForm/></li>
        </ul>
      </nav>

      <Header />
        
          <Route exact path="/" component={App} />
          <Route path="/characters" component={CharacterList} />
          <Route path="/locations" component={LocationsList} />
     
    </main>
  )
}

