// Write your Character component here
import React from 'react';
import { Cards, Button } from './CardStyling'



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


        const buttonAlert = ()=> {
            return alert("Are You Sure?");
           }

    return (
        <Cards>
            <img src='https://static.wixstatic.com/media/8946f9_e2963118363e469887052cdb0e4f48a7~mv2_d_1600_1600_s_2.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/Star-Wars-transparent-logo.png'alt='star wars logo'/>
            <h1>{name}</h1>
            <h4>Species:{species}</h4>
            <Button onClick={buttonAlert}>Homeworld:{homeworld}</Button>
            <p>Gender:{gender}</p>
            <p>Hair Color:{hair_color}</p>
            <p>Eye Color:{eye_color}</p>
            <p>Skin Color:{skin_color}</p>
            <p>Mass:{mass}</p>
            <p>Height:{height}</p>
            <p>Birth Year:{birth_year}</p>
            <Button onClick={() => alert("Want to see more Films?")}>Films:{films}</Button>
            <Button onClick={buttonAlert}>Vehicles:{vehicles}</Button>
            <Button onClick={() => alert("Want to go to Starships?")}>Starships:{starships}</Button>
            

        </Cards>
    );
}
export default Character;
