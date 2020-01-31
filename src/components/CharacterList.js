import React, { useEffect, useState } from "react";
import axios from 'axios';
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
         setCharacters(response.data.results);
        })
        .catch(errors => {
          console.log('The data was not returned',errors)
        })
    }, []);
    console.log(characters);
    {characters.map(character => {
      return (
        <Toast>
    
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
      );
  })} 
}
