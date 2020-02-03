import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import React from 'react';

export default function EpisodeCard(props) {
    return (
        <Toast className='card'>
            <ToastHeader class='toast-header'>
                <p>Name: {props.name}</p>
            </ToastHeader>
            <ToastBody>
                <p>Air Date: {props.air_date}</p>
                <p>Episode: {props.episode}</p>
            </ToastBody>
        </Toast>
    )
}