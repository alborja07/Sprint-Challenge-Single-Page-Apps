import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {
//  const [data, setData] = useState([])
  const [query, setQuery] = useState('');

  useEffect(() => {
 
   axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
       const char = response.data.results.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
      );
      
    // setData(char);
       });

      }, [query]);

  const handleInputChange = event => {
        setQuery(event.target.value);
};
  return (
    <section className="search-form">
      <form>
        <input 
        type="text"
        onChange={handleInputChange}
        value={query}
        name="name"
        tabIndex="0"
        className="prompt search-name"
        placeholder="search"
        autoComplete="off"
      />
      </form>
      {/* <div>
        {data.map(data => {
          return (
            <div key={data.id}>
             {data.name}
              </div>
          );
        })}
      </div> */}
      
       </section>
  );

}
