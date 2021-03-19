import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from'./components/Character.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [characters, setCharacters] =useState([])

useEffect(() => {
  axios
  .get(`https://swapi.dev/api/people`)

  .then(response => {
    console.log(response.data.results);
    setCharacters(response.data)
  })
  .catch(error => {
    console.log('error')
  });

  }, [])

 

  return (
    <div className="App">
        {characters.map((item) => 
        <Character characters={item} className="StarWars" />
        )}
    </div>
  );
}

export default App;
