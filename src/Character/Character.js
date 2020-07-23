import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import TokenService from '../services/token-service';
import config from '../config';
import './Character.css';

function Character() {
  const [character, setCharacter] = useState([]);

  let params = useParams();

  useEffect( () => {
    const fetchCharacter = () => {
      fetch(`${config.API_ENDPOINT}/characters/${params.character_id}`, {
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
          .then(character => {
            character.groups = character.groups.split(',').join('');
            setCharacter(character);
          })
    }
    fetchCharacter();
  }, [params.character_id])

  const renderCharacter = () => {
    return (
      <div className="character-page">
        <h2 className="character-name">{character.charactername}</h2>
        <p className="character-details">{`Level ${character.characterlevel} ${character.characterclass} ${character.groups}`}</p>
        <p>
          <span className="character-attribute">STR: </span>
          <span className="character-attribute-value">{character.strength}</span>
        </p>
        <p>
          <span className="character-attribute">DEX: </span>
          <span className="character-attribute-value">{character.dexterity}</span>
        </p>
        <p>
          <span className="character-attribute">CON: </span>
          <span className="character-attribute-value">{character.constitution}</span>
        </p>
        <p>
          <span className="character-attribute">INT: </span>
          <span className="character-attribute-value">{character.intelligence}</span>
        </p>
        <p>
          <span className="character-attribute">CHA: </span>
          <span className="character-attribute-value">{character.charisma}</span>
        </p>
        <p>
          <span className="character-attribute">WIS: </span>
          <span className="character-attribute-value">{character.wisdom}</span>
        </p>
        <p>
          <span className="character-attribute">HP: </span>
          <span className="character-attribute-value">{character.hp}</span>
        </p>
        <p>
          <span className="character-attribute">Attack Value: </span>
          <span className="character-attribute-value">{character.attackvalue}</span>
        </p>
        <p>
          <span className="character-attribute">Saving Throw: </span>
          <span className="character-attribute-value">{character.savingthrow}</span>
        </p>
        <p>
          <span className="character-attribute">Movement: </span>
          <span className="character-attribute-value">{character.movement} feet</span>
        </p>
        <p>
          <span className="character-attribute">Languages: </span>
          <span className="character-attribute-value">{character.languages}</span>
        </p>
      </div>
    );
  }

  return (character !== [] ? 
    <>
      {renderCharacter()}
    </>
    :
    <p>Loading...</p>
  )
}

export default Character;