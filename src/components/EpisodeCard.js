
import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import React from 'react';

export default function EpisodeCard(props) {
    return (
        <Toast className='card'>
            <ToastHeader className='toast-header'>
                <p>Name: {props.episode.name}</p>
            </ToastHeader>
            <ToastBody>
                <p>Air Date: {props.episode.air_date}</p>
                <p>Episode: {props.episode.episode}</p>
            </ToastBody>
        </Toast>
    )
    
}