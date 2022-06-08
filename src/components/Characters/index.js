import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import TitleImage from '../../images/homeTitle.png';

const CharactersWrapper = styled.div`
`;

const CharactersNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const CharactersLink = styled(Link)`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #6628ac;
  }
`;

const CharactersImage = styled.img`
  max-width: 100%;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #d327a5;
  }
`;

const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CharactersSearch = styled.div`
`;

const CharactersInput = styled.input`
  background: #ffffff;
  margin: 0 0 20px 0;
  width: 290px;
  padding: 10px;
  font-size: 18px;
  outline: none;
  border: 2px solid #ffffff;
  border-radius: 6px;
`;

const CharactersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  margin: 20px auto;
`;

function Characters() {
  const [chars, setChars] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(res => {
        setChars(res.data.results);
      })
      .catch(err => {
        alert(err.message);
      });
  }, [query]);

  console.log("Characters:", chars);

  return (
    <CharactersWrapper>
      <CharactersNav>
        <CharactersLink to="/Rick-React"><CharactersImage src={TitleImage} alt="HomeImage" /></CharactersLink>
      </CharactersNav>
      <CharactersContainer>
      <CharactersSearch>
              <CharactersInput type="text"
                     placeholder="Пошук персонажа"
                     onChange={event => setQuery(event.target.value)}
                     value={query}
              />
        </CharactersSearch>
        <CharactersList>
        {chars.map(char => {
          return <Card key={char.id} char={char} />;
        })}
        </CharactersList>
      </CharactersContainer>
    </CharactersWrapper>
  );
}

export default Characters;


