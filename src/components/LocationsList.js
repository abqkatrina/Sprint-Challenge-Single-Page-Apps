import React, { useState, useEffect, Form} from 'react';
import axios from 'axios';
import LocationCard from  './LocationCard';
import Header from './Header';


export default function LocationsList() {

const [locations, setLocation] = useState([]);
const [query, setQuery] = useState('');

    useEffect(() => {
   //get array of locations
      axios.get('https://rickandmortyapi.com/api/location/')

   // .then(response => console.log(response))
   // change state
           .then(response => setLocation(response.data.results))
           .catch(errors => console.log('And that\'s the wayyyy the news goes!', errors))
    }, []);

    const handleChange = event => {
      setLocation({ location: event.target.value });
    }

      return (
        <div className='locationBody'>
        <Header />
          <Form>
            <input
              type="text"
              placeholder='Search Locations'
              onChange={handleChange}
            />
            <button onSubmit={handleChange}>Search</button>
          </Form>
          <section className='location-list grid-view'>
             {locations.map((location) => (      
               <LocationCard key={location.id} location={location}/>
            ))}
        </section>
      </div>
      
    )
  }

