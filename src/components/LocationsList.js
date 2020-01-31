import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Toast, ToastBody, ToastHeader } from 'reactstrap';


export default function LocationsList() {
    const [locations, setlocations] = useState([]);

    useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
          //console.log(response.data.results);
          setlocations(response.data.results);
      })
      .catch(error => {
          console.log('oh shit it\'s an error', error);
      }) // close .catch

      
    }, [locations]);

    
  
    return (
      <section className="location-list">
        
        {locations.map(location => (
          <Toast className='card' key={location.id}>
            <ToastHeader>
 
            </ToastHeader>
  
            <ToastBody>
              <ul>
                <li>Name: {location.name}</li>
                <li>Type: {location.Type}</li>
                <li>Dimension: {location.Dimension}</li>
                <li>Residents: {location.Residents}</li>
              </ul>
            </ToastBody>
  
          </Toast>
          ))}   
  
      </section>
    );

}
