import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';


const LocationsList = () => {

  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get('https://rickandmortyapi.com/api/Location/')
      .then(response => {
        console.log(response.data.results);
        setLocations(response.data.results);
      })
      .catch(errors => {
        console.log('AIDS!', errors)
      })
  }, [locations, setLocations]);
    
  console.log(locations);
  
  return (
    <section className='locations-list'>
        {locations.map(location => (
          <LocationCard key={location.id} />
        ))}
    </section>
  );
}
export default LocationsList;