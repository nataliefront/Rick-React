import React from "react";
import styled from "styled-components";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Characters from "./components/Characters";
import Character from "./components/Character";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/Rick-React" element={<Home />} />
          <Route path="/Rick-React/characters"  element={<Characters />} />
          <Route path="/Rick-React/characters/:id"  element={<Character />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
