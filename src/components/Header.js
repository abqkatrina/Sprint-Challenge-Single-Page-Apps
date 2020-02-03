import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h2>Rick &amp; Morty's Book of Faces and Places</h2>
      <nav className="navbar">
          <Link to='/' className='link'>Home</Link>
          <Link to='/characters'className='link'>Characters</Link>
          <Link to='/locations'className='link'>Locations</Link>
          <Link to='/episodes'className='link'>Episodes</Link>
      </nav>    
    </header>
  );
}
