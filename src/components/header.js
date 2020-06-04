/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

import Score from './score';

const HeaderStyled = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 23px;
  border-radius: 0.5em;
  border: 3px solid rgba(255, 255, 255, 0.29);
   min-width: 250px;
  h1 {
    font-size: 18px;
    line-height: 16px;
    /* font-weight: 700; */
    text-transform: uppercase;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>
        Rock <br />
        Paper <br />
        Scissors
      </h1>
      <Score />
    </HeaderStyled>
  );
}

export default Header;
