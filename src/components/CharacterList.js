import React, { useState, useEffect, Form } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Header from './Header';


export default function CharacterList() {

const [characters, setCharacter] = useState([]);
// const [query, setQuery] = useState('');

  useEffect(() => {
  //get array of characters
    axios.get('https://rickandmortyapi.com/api/characters/')

  // .then(response => console.log(response))
  // change state
          .then(response => setCharacter(response.data.results))
          .catch(error => console.log('AIDS!', error))
  },[]);

   
  const handleChange = event => {
    setCharacter({ character: event.target.value })
  }

  return (
    <div className='characterBody'>
      <Header />
      <div>
      <Form>
        <input
          type="text" 
          placeholder='Search characters'
          onChange={handleChange}
          />
        <button onSubmit={handleChange}>Search</button>
        </Form>
      
      <section className="character-list grid-view">
    
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </section>
    </div>
    </div>
  )
}
