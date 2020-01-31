import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import Welcome from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm';

 


export default function App() {
  return (
    <main>
      <Header />
      <Welcome />
      <SearchForm />
      <Route exact path ='/' component={CharacterList} />
      
    </main>
  );
}
