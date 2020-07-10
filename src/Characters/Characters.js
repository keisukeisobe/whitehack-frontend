import React, { useState, useEffect } from "react";
import TokenService from '../services/token-service';
import config from '../config'
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
      <ul className="character-list">
        {characters.map(character => {
          console.log(character);
          return (
            <li key={character.id}>
              {`${character.charactername}, The ${character.characterclass}`}
            </li>
          )
        })}        
      </ul>
    );
  }

  return (
    <div className="characters-container">
      <h2>Characters</h2>
      {renderCharacterList()}
    </div>
  );
}

export default Characters;