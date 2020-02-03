import React, { useState, useEffect, Form} from 'react';
import axios from 'axios';
// import SearchForm from './SearchForm';
import EpisodeCard from  './EpisodeCard';


export default function EpisodeList() {

  const [episodes, setEpisode] = useState([]);
  // const [query, setQuery] = useState('');

  useEffect(() => {
   //get array of episodes
      axios.get('https://rickandmortyapi.com/api/episode/')

  //  .then(response => console.log(response))
   // change state
           .then(response => setEpisode(response.data.results))
           .catch(error => console.log('GRASSSSS... tastes bad!', error))
    }, []);

    console.log( 'episodes', episodes);
  // const handleChange = event => {
  //   setEpisode({ value: event.target.value })
  // }


    return (
      // <div className='container'>

        /* <Form>
        <SearchForm />
       <button type='submit'}>Search</button>
          
          </Form>
           */

          <div className='episode-list grid-view'>
              {episodes.map((episode) => (      
                <EpisodeCard key={episode.id} episode={episode}/>
              ))}           
          </div>
      // </div>
  );
}
   
