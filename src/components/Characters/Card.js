import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CharacterCardWrapper = styled.div`
  width: 290px;
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

  @media screen and (max-width: 600px) {
    margin: 20px 10px;
  }
`;

const CharacterCardLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

const CharacterCardName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0;
`;

const CharacterCardImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const CharacterCardStatus = styled.p`
  font-size: 22px;
  margin: 10px 0;
`;


function Card({ char }) {
  return (
    <CharacterCardWrapper>
      <CharacterCardLink to={`/Rick-React/characters/${char.id}`} key={char.id}>
        <CharacterCardName>{char.name}</CharacterCardName>
        <CharacterCardImage src={char.image} alt={char.name} />
        <CharacterCardStatus>Status: {char.status}</CharacterCardStatus>
      </CharacterCardLink>
    </CharacterCardWrapper>
  );
}

export default Card;

