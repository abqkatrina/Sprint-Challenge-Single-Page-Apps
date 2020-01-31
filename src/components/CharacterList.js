import React, { useEffect, useState } from "react";
import {Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        //console.log(response.data.results);
        setCharacters(response.data.results);
    })
    .catch(error => {
        console.log('oh shit it\'s an error', error);
    }) // close .catch
  }, [characters]);

  return (
    <section className="character-list">
      
      {character.map(character => (
        <Toast className='card' key={character.id}>
          <ToastHeader>
            <img 
                className='character-img'
                src={character.image}
                alt={character.name}
            /> 
          </ToastHeader>

          <ToastBody>
            <ul>
              <li>Name: {character.name}</li>
              <li>Status: {character.status}</li>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
              <li>Origin: {character.origin.name}</li>
              <li>Type: {character.type}</li>
            </ul>
          </ToastBody>

        </Toast>
        ))}   

    </section>
  );
}
