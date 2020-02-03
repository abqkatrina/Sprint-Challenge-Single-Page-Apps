import React, { useState, useEffect, Form} from 'react';
import axios from 'axios';
import EpisodeCard from  './EpisodeCard';
import Header from './Header';


export default function EpisodeList() {

  const [episodes, setEpisode] = useState([]);
  const [query, setQuery] = useState('');


  useEffect(() => {
   //get array of episodes
      axios.get('https://rickandmortyapi.com/api/episodes/')

   // .then(response => console.log(response))
   // change state
           .then(response => setEpisode(response.data.results))
           .catch(errors => console.log('AIDS!', errors))
    }, []);

  const handleChange = event => {
    setEpisode({ episode: event.target.value })
  }


    return (
      <div className='episodeBody'>

      <Header />

      <div>
        <Form>
          <input
            type="text" 
            placeholder='Search Episodes'
            value={query}
            data={episodes}/>

            <button onSubmit={handleChange}>Search</button>
          
          </Form>
          
          <section className='episode-list grid-view'>
          
            <div>
              {episodes.map((episode) => (      
                <EpisodeCard key={episode.id} episode={episode}/>
              ))}
            </div>
          
          </section>
      </div>
    </div>
  );
}
   
