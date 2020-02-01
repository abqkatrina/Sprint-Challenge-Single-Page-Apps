import React from "react";
import {Toast, ToastBody, ToastHeader } from 'reactstrap';


export default function CharacterCard(props)  {
  
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
        <li>Origin: {props.origin}</li>
        <li>Type: {props.type}</li>
      </ul>
    </ToastBody>
</Toast> 
  );
};
     
