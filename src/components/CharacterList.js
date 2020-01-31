import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <h2>{characters.map(character => (
        <CharacterInfo key={character.id} character={character}/>
        
      ))}</h2>
    </section>
  );
}

function CharacterInfo({ character }) {
  const { name, species, gender, origin, image } = character;
  return (
    <div>
     <h2>{name}</h2>

     <div>
        Species: <em>{species}</em>
      </div>
      <div>
        Gender: <strong>{gender}</strong>
      </div>
      <div>
        Origin: {origin.name}
      </div>
      <div>
        <img src={image}/>
      </div>

      
      
    </div>
  );
}