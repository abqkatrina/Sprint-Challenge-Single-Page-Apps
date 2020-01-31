import React from "react";
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm';


export default function Header() {
  return (
    <nav className="navbar">
      <ul>
        <li> <h1 className="">Rick &amp; Morty Fan Page</h1></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/character'>Characters</Link></li>
        <li><Link to='/location'>Locations</Link></li>
        <li><SearchForm/></li>
      </ul>
    </nav>
  );
}