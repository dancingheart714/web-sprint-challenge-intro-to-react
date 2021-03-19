// Write your Character component here
import React from 'react';
import { Cards } from './CardStyling'



const Character = (props) => {
    const {name, 
         height,
         mass,
         hair_color, 
         skin_color, 
         eye_color, 
         birth_year, 
         gender, 
         homeworld, 
         films, 
         species, 
         vehicles, 
         starships,
        } = props.characters

    return (
        <Cards>
            <Img src='./images/hero star wars.png' />
            <h1> {name}</h1>
            <h2>Species:  {species}</h2>
            <h2>Gender:  {gender}</h2>
            <h2>Hair Color:  {hair_color}</h2>
            <h2>Eye Color:  {eye_color}</h2>
            <h2>Skin Color:  {skin_color}</h2>
            <h2>Mass:  {mass}</h2>
            <h2>Height:  {height}</h2>
            <h2>Birth Year:  {birth_year}</h2>
            <h2>Homeworld:  {homeworld}</h2>
            <h2>Vehicles:  {vehicles}</h2>
            <h2>Starships:  {starships}</h2>
            <h2>Films:  {films}</h2>
        </Cards>
    );
}

export default Character;


