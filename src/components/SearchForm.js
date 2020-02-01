import React, { useState, useEffect } from "react";
import axios from 'axios';

const SearchForm = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

  useEffect(() => {
  // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/')
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
        response.data.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase()))
      })
      .catch(errors => {
        console.log('The data was not returned', errors)
      })
  }, [query]);

  const handleChanges = event => {
    setQuery(event.target.value);
  };  

  const handleInputChanges = event => {
    setQuery(event.target.value);
  };
  console.log(data);


  return (
    <section className="search-form">
      <form className='form'>

          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChanges}
          />  

          <button type="submit" onSubmit={handleChanges}>Search</button>
          
      </form>
    </section>
  );
}
export default SearchForm;