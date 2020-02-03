import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import React from 'react';

export default function CharacterCard(props)  {
    return(
        <Toast className='card'>
            <ToastHeader class='toast-header'>
                <img src={props.image} className='image' alt={props.name}/>
            </ToastHeader>
            <ToastBody>
                <p>Name: {props.name}</p>
                <p>Status: {props.status}</p>
                <p>Species: {props.species}</p>
                <p>Gender: {props.gender}</p>
                <p>Origin: {props.origin}</p>
            </ToastBody>
        </Toast>
    )
  };
