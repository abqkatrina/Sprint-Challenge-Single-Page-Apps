import React, { useState, useEffect, Form } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';


export default function CharacterList() {

const [characters, setCharacter] = useState([]);
// const [query, setQuery] = useState('');

  useEffect(() => {
  //get array of characters
    axios.get('https://rickandmortyapi.com/api/character/')

  // .then(response => console.log(response))
  // change state
          .then(response => setCharacter(response.data.results))
          .catch(error => console.log('AIDS!', error))
  },[]);

  console.log( "characters", characters);
  // const handleChange = event => {
  //   setCharacter({ value: event.target.value })
  // }

  return (
    // <div className='container'>    
      
        /* <Form>
          <SearchForm/>
          <button type='submit'>Search</button>
        </Form>  */
      
        <div className="character-list grid-view">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

    // </div>
 
  )
}
