import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TokenService from '../services/token-service';
import config from '../config';
import './Characters.css';

function Characters(){
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    const fetchCharacters = () => {
      fetch(`${config.API_ENDPOINT}/characters`, {
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`
        }
      })
        .then(res => {
          if(!res.ok){
            return res.json().then(err => Promise.reject(err));
          } else {
            return res.json();
          }
        })
          .then(characters => {
            setCharacters(characters);
          })  
    }

    fetchCharacters();
  }, [])

  const renderCharacterList = () => {
    return (
      <ul className="characters-list">
        {characters.map(character => {
          console.log(character);
          return (
            <Link key={character.id} className="characters-link" to={`/characters/${character.id}`}>
              <li key={character.id} className="characters-box">
                <p className="characters-name">{character.charactername}</p>
                <p className="characters-details">
                  The {character.characterclass} | Level {character.characterlevel} | HP: {character.hp} | AV: {character.attackvalue} | ST: {character.savingthrow} | STR: {character.strength} | DEX: {character.dexterity} | CON: {character.constitution} | INT: {character.intelligence} | CHA: {character.charisma} | WIS: {character.wisdom} | MOVE: {character.movement} | LANG: {character.languages}
                </p>
              </li>
            </Link>
          )
        })}        
      </ul>
    );
  }

  return (
    <div>
      <h2>Characters</h2>
      {renderCharacterList()}
    </div>
  );
}

export default Characters;