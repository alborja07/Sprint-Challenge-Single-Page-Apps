import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import Welcome from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';

 


export default function App() {
  return (
    <main>
      <Header />
      <Welcome />
      <Route exact path ='/' component={CharacterList} />
      
    </main>
  );
}
