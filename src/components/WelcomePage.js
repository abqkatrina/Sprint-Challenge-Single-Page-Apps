import React from "react";
import { Link } from 'react-router-dom';


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h2>Rick &amp; Morty's Book of Faces and Places</h2>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div className="header-button">
          <button className='welcome-button'><Link to = '/Characters'>Enter</Link></button>
        </div>
      </header>
    </section>
  );
}
