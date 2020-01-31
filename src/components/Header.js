import React from "react";
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm';


export default function Header() {
  return (
    <nav className="navbar">
       <h1 className="title">Rick &amp; Morty Fan Page</h1>
       <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/characters'>Characters</Link></li>
        <li><Link to='/locations'>Locations</Link></li>
        <li><SearchForm/></li>
      </ul>
    </nav>
  );
}
