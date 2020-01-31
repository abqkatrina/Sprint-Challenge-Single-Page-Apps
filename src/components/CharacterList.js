import React, { Component, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';


class CharacterList extends Component {
  // TODO: Add useState to track data from useEffect
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }




  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .post('https://rickandmortyapi.com/api/character/', characters)
    .then(response => {
        //console.log(response.data.results);
        this.setState(() => ({characters:response.data.results}));
    })
    .catch(error => {
        console.log('oh shit it\'s an error', error);
    }), // close .catch

  }, [characters]);


render() {
    return (
      <section className="character-list">

        {characters.map(character => (
          <CharacterDetails key={character.id} character={character} />
          ))}   

      </section>
    );
  }
}

function CharacterDetails({ character }) {
  
  return (
    <Link to={`/characters/${character.id}`}>
      <CharacterCard character={character}/>
    </Link>
  );
}

export default CharacterList;
