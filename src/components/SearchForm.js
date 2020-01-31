import React, { useState } from "react";

export default function SearchForm() {
 const [query, setQuery] = useState('');

 const handleInputChange = e => {
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
      
       </section>
  );
}
