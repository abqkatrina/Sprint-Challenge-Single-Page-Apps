// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";



// function SearchForm() {
  
//  const [query, setQuery] = useState("");
//  const [searchResults, setSearchResults] = useState([]);

//  const handleChange = event => {
//     setQuery(event.target.value);
//   };
 
//   useEffect(() => {
//     const results = ARRAY.filter(ITEM =>
//       ITEM.toLowerCase().includes(query.toLowerCase())
//     );
//     setSearchResults(results);
//   }, [query]);

//   return (
//     <div className='container'>
//         <div className="searchBox">
//             <input
//                 id="searchForm"
//                 type="text"
//                 placeholder="Search"
//                 value={query}
//                 onChange={handleChange}
//             />
//             <button type='submit'>Search</button>
//         </div>
//         <div className="character-list">
//         <ul>
//           {searchResults.map(ITEM => (
//             <li key={character}>{character}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// export default SearchForm;