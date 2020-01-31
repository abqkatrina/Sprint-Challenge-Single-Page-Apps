import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Toast, ToastBody, ToastHeader } from 'reactstrap';


export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
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
  }, []);

  console.log(locations);
  locations.map(location => {
    return (
      <Toast>
  
        <ToastHeader>
          <img 
              className='location-img'
              src={location.image}
              alt={location.name}
          /> 
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
    ); // close return toast
    }) // close map

}// close list
