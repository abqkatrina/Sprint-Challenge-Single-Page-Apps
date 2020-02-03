import React, { useState, useEffect, Form} from 'react';
import axios from 'axios';
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
    // }

      return (
        <div className='container'>
  
          {/* <Form>
            <input
              type="text"
              placeholder='Search Locations'
              value= {query}
              data= {locations}
            />
            <button onSubmit={handleChange}>Search</button>
          </Form> */}
          <section className='location-list grid-view'>
             {locations.map((location,index) => {  
               return(   
               <LocationCard key={index} location={location}/>
             )})}
        </section>
      </div>
      
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
  