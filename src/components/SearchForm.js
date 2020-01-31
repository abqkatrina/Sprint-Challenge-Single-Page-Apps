import React, { useState } from "react";

export default function SearchForm() {
 
  const [searchTerm, setSearchTerm] = React.useState("");
        
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = e => {
      setSearchTerm(e.target.value)
  }

  React.useEffect(() => {
      
      const results = props.people.filter(person =>
          person.toLowerCase().includes(searchTerm)
      );

      setSearchResults(results);

  }, [searchTerm]);

  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </section>
  );
}
