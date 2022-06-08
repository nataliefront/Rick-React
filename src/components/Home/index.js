import React from "react";
import styled from "styled-components";
import { Link as This_Link } from "react-router-dom";
import TitleImage from '../../images/homeTitle.png';

const HomeWrapper = styled.div`
  text-align: center;
`;

const HomeTitle = styled.div`
  margin: 20px 10px;
`;

const HomeImage = styled.img`
  max-width: 100%;
`;

const Link = styled(This_Link)`
  font-size: 30px;
  font-weight: 700;
  margin: 20px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #000000
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const LinkText = styled.div`
  transform: scale(1, 1);
  animation-name: link;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes link {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.15, 1.15);
   }
   100% {
      transform: scale(1, 1);
   }
}
`;

function Home() {
  return (
    <HomeWrapper>
      <HomeTitle><HomeImage src={TitleImage} alt="HomeImage" /></HomeTitle>
      <Link to="/Rick-React/characters">
        <LinkText>Дивитись крутих чуваків</LinkText>
      </Link>
    </HomeWrapper>
  );
}

export default Home;