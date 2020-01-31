import React from "react";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link to='/'>Welcome Page</Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/search'>Search</Link>
    </header>
  );
}
