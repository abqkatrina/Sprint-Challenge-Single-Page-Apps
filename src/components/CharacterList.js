import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

const CharacterList = () => {

  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log('get characters', response.data.results);
        setCharacters(response.data.results);
      })
      .catch(errors => {
        console.log("And that's the wayyyyyy the news goes!", errors)
      })
  // }, [characters, setCharacters]);
    
  console.log(characters);
  
  return (
    <section className="character-list">
     
      <div>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
export default CharacterList;
