
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchForm from './SearchForm';
import LocationCard from  './LocationCard';


const LocationsList = () => {

const [data, setData] = useState([]);
const [query, setQuery] = useState('');
 


    useEffect(() => {
   //get array of locations
    axios.get('https://rickandmortyapi.com/api/location/')
   // change state
        .then(response => {
          console.log(response.data.results)
          const locations = response.data.results.filter(location =>
            location.name.toLowerCase().includes(query.toLowerCase()))
            setData(locations)
          })
        .catch(errors => console.log('And that\'s the wayyyy the news goes!', errors));
    }, [query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};

    
    
    return (
      <div className='container'>
        <form className='search'>
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="Search Locations"
            autoComplete="off"
          />
          <button type='submit'>Search</button>
        </form>
        <div className='location-list grid-view'>
          {data.map((location) => {  
            return(   
              <LocationCard key={location.id} location={location}/>
          )})}
        </div>
      </div>
    )
  
}
export default LocationsList;