import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import React from 'react';
 
 export default function LocationCard(props) {
     return(    
        <Toast className='card'>
            <ToastHeader class='toast-header'>
                <p>Name: {props.name}</p>
            </ToastHeader>
            <ToastBody>
                <p>Type: {props.type}</p>
                <p>Dimension: {props.dimension}</p>
            </ToastBody>
        </Toast>
    )
}


