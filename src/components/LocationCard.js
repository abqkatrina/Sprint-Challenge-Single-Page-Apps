import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import React from 'react';
 
 export default function LocationCard(props) {
     return(    
        <Toast className='card'>
            <ToastHeader className='toast-header'>
                <p>Name: {props.location.name}</p>
            </ToastHeader>
            <ToastBody>
                <p>Type: {props.location.type}</p>
                <p>Dimension: {props.location.dimension}</p>
            </ToastBody>
        </Toast>
    )
}


