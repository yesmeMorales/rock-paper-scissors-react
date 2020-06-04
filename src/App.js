/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useState } from 'react';

import styled from 'styled-components';

import './App.css';
import Header from './components/header';
import Wrapper from './components/wrapper';
import Table from './components/table';
import Rules from './components/rules';

export const ScoreContext = createContext();

const AppStyled = styled.main`
  @font-face {
    font-family: "Barlow Semi Condensed";
    src: url("./fonts/BarlowSemiCondensed-Medium.ttf");
  }

  font-family: "Barlow Semi Condensed";
  background-image: radial-gradient(circle at top, #1f3757 20%, #131537 100%);
  color: white;

  .app-content {
    padding: 2em;
    min-height: 100vh;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
  }

`;

function App() {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{
      score,
      setScore,
    }}>
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  );
}

export default App;
