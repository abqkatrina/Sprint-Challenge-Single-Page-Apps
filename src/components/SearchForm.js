import React, { useState } from "react";
import { Formik } from 'formik';
export default function SearchForm() {
 
  const [searchTerm, setSearchTerm] = React.useState("");
        
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = e => {
      setSearchTerm(e.target.value)
  }

  React.useEffect(() => {
      
      const results = searchResults.filter(person =>
          person.toLowerCase().includes(searchTerm)
      );

      setSearchResults(results);

  }, [searchTerm,searchResults]);

  return (
    <section className="search-form">
      <Formik className='form'>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />  
      </Formik>
      <button type="submit">Search </button>
    </section>
  );
}
