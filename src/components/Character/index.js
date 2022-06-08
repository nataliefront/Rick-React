import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import TitleImage from '../../images/homeTitle.png';

const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 15px;
    filter: drop-shadow(0.1rem 0.1rem 0.25rem darkslategray);
  }
`;

const CharacterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const CharacterLink = styled(Link)`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #6628ac;
  }
`;

const CharacterLinkImage = styled.img`
  max-width: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #e9a552;
  }
`;

const CharacterListLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  text-decoration: none;
  color: #000000;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #3fd7c5;
  }
`;

const CharacterCard = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 3px solid #ebe9ec;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 4px rgba(222, 226, 227, 0.5);
  padding: 10px;
  margin: 20px;
  color: #ffffff;

  @media screen and (max-width: 700px) {
    width: 290px;
    margin: 20px 10px;
  }
`;

const CharacterName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0;
`;

const CharacterImage = styled.img`
  max-width: 100%;
`;

const CharacterStatus = styled.p`
  font-size: 22px;
  margin: 10px 0;
`;

const CharacterInfo = styled.p`
  font-size: 22px;
  margin: 10px 0;
`;


function Character() {
  const { id } = useParams()
  const [char, setChar] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => {
        setChar(res.data);
        console.log("Response:", res);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [id]);

  return (
    <CharacterWrapper>
      <CharacterNav>
        <CharacterLink to="/Rick-React"><CharacterLinkImage src={TitleImage} alt="HomeImage" /></CharacterLink>
        <CharacterListLink to="/Rick-React/characters">Повернутись до списку</CharacterListLink>
      </CharacterNav>
      <CharacterCard key={char} id={char.id}>
        <CharacterName>{char.name}</CharacterName>
        <CharacterImage src={char.image} alt={char.name} />
        <CharacterStatus>Status: {char.status}</CharacterStatus>
        <CharacterInfo>Species: {char.species}</CharacterInfo>
        <CharacterInfo>Gender: {char.gender}</CharacterInfo>
        <CharacterInfo>{char.origin && char.origin.name}</CharacterInfo>
        <CharacterInfo>Created: {char.created}</CharacterInfo>
      </CharacterCard>
    </CharacterWrapper>
  );
}

export default Character;

