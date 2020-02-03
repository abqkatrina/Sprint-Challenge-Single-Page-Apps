import React, { useState, useEffect, Form} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import LocationCard from  './LocationCard';


export default function LocationsList() {

const [locations, setLocation] = useState([]);
// const [query, setQuery] = useState('');

    useEffect(() => {
   //get array of locations
      axios.get('https://rickandmortyapi.com/api/location/')

  //  .then(response => console.log(response))
   // change state
           .then(response => setLocation(response.data.results))
           .catch(errors => console.log('And that\'s the wayyyy the news goes!', errors))
    }, []);

    // const handleChange = event => {
    //   setLocation({ value: event.target.value });
  console.log("locations", locations)  // }
  
      return (
        // <div className='container'>
        //   <div id='search'>
        //   <Form>
        //     <SearchForm />
        //     <button tpe='submit'>Search</button>
        //   </Form>
        //   </div>
          <div className='location-list grid-view'>
             {locations.map((location) => {  
               return(   
               <LocationCard key={location.id} location={location}/>
             )})}
        </div>
      // </div>
      
    )
  }



  
// const CardGrid = ({ character }) => {
//     return (
//       <div className="grid">
//           {character.map((character, index) => {
//             return <Card key={index} character={character} />;
//           })}
//       </div>
//     );
//   };
  