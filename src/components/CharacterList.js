import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';


const CharacterList = () => {

  const [data, setData] = useState([]);
const [query, setQuery] = useState('');

  useEffect(() => {
  //get array of characters
    axios.get('https://rickandmortyapi.com/api/character/')

  // .then(response => console.log(response))
  // change state
  .then(response => {
    console.log(response.data.results)
    const characters = response.data.results.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase()))
      setData(characters)
    })
          .catch(error => console.log('AIDS!', error))
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className='container'>
      <form className='search'>
      <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="Search Characters"
            autoComplete="off"
          />
          <button type='submit'>Search</button>
      </form>
      <div className='character-list grid-view'>
      {data.map((character) => {  
            return(   
              <CharacterCard key={character.id} character={character}/>
          )})}
      </div>
    </div>
  );
}

export default CharacterList;