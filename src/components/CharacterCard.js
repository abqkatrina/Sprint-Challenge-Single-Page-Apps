import React from "react";
import {Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function CharacterCard() {
  return (
  {characters.map(character => (
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
  );
}
