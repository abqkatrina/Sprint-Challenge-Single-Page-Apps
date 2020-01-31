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
    .post('https://rickandmortyapi.com/api/character/', characters)

    .then(response => {
        //console.log(response.data.results);
        setCharacters(() => ({characters:response.data.results}));
    })

    .catch(error => {
        console.log('oh shit it\'s an error', error);
    }) // close .catch

  }, [characters]);



    return (
      <section className="character-list">

        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
          ))}   

      </section>
    );
}

function CharacterCard( props ) {
  
  return (
    <Toast>
      <ToastHeader>
        <img 
            className='character-img'
            src={props.image}
            alt={props.name}
        /> 
      </ToastHeader>

      <ToastBody>
        <ul>
          <li>Name: {props.name}</li>
          <li>Status: {props.status}</li>
          <li>Species: {props.species}</li>
          <li>Gender: {props.gender}</li>
          <li>Origin: {props.origin.name}</li>
          <li>Type: {props.type}</li>
        </ul>
      </ToastBody>

    </Toast> 
  );
}


