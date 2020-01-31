import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios 
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data);
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
        <characterInfo key={character.id} character={character}/>
      ))}</h2>
    </section>
  );
}
