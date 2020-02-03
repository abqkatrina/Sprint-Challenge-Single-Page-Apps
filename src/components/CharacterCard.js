import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import React from 'react';

export default function CharacterCard(props)  {
    return (
        <Toast className='card'>
            <ToastHeader className='toast-header'>
                <img src={props.character.image} className='image' alt={props.character.name}/>
            </ToastHeader>
            <ToastBody>
                <p>Name: {props.character.name}</p>
                <p>Status: {props.character.status}</p>
                <p>Species: {props.character.species}</p>
                <p>Gender: {props.character.gender}</p>
                <p>Origin: {props.character.origin.name}</p>
            </ToastBody>
        </Toast>
    )
  }
