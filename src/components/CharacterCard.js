import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import React from 'react';

export default function CharacterCard(item)  {
    return(
        <Toast className='card'>
            <ToastHeader class='toast-header'>
                <p>Name: {item.name}</p>
            </ToastHeader>
            <ToastBody>
                <p>Name: {item.name}</p>
                <p>Status: {item.status}</p>
                <p>Species: {item.species}</p>
                <p>Gender: {item.gender}</p>
                <p>Origin: {item.origin.name}</p>
            </ToastBody>
        </Toast>
    )
  };
