import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchForm from './SearchForm';
import EpisodeCard from  './EpisodeCard';


const EpisodeList = () => {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
   //get array of episodes
    axios.get('https://rickandmortyapi.com/api/episode/')

  //  .then(response => console.log(response))
   // change state
   .then(response => {
    console.log(response.data.results)
    const episodes = response.data.results.filter(episode =>
      episode.name.toLowerCase().includes(query.toLowerCase()))
      setData(episodes)
    })
        .catch(error => console.log('GRASSSSS... tastes bad!', error))
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return(
    
    <div className='container'>
      <div className='search'>
      <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="Search Episodes"
            autoComplete="off"
          />
          <button type='submit'>Search</button>
      </div>
      <div className='episode-list grid-view'>
        {data.map((episode) => (      
          <EpisodeCard key={episode.id} episode={episode}/>
        ))}           
      </div>
    </div>
  )
}
export default EpisodeList;