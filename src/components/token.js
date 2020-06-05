import React from 'react';
import styled, { keyframes } from 'styled-components';

const shadow = keyframes`
  /* from {
    box-shadow: box-shadow: 0 0 0 0px rgba(255,255,255,0.04),  0 0 0 0px rgba(250,250,250,0.03), 0 0 0 90px rgba(250,250,250,0.02);
  } */
  to {
    box-shadow: 0 0 0 30px rgba(255,255,255,0.04),  0 0 0 60px rgba(250,250,250,0.03), 0 0 0 90px rgba(250,250,250,0.02);
    transform:  scale(1.1);
  }
`
const box = keyframes`
  to {
    transform: rotateY(360deg);
  }
`

const TokenStyled = styled.div`
  width:  130px;
  height: 125px;
  border: 16px solid ${(color) => color.color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  box-shadow: 0 6px 0 ${(color) => color.color.border};
  cursor: pointer;
  position: relative;
  z-index: 2;
  ${({ isShadowAnimated }) => isShadowAnimated && 'box-shadow: 0 0 0 0px rgba(255,255,255,0.04),  0 0 0 0px rgba(250,250,250,0.03), 0 0 0 0px rgba(250,250,250,0.02);'}
  animation: 1s ${({ isShadowAnimated }) => isShadowAnimated ? shadow : ''} forwards;


  &:active {
    transform: scale(0.9);
  }
  .box {
    background: ${({ name }) => (name === 'default' ? '#122343' : 'white')};
    box-shadow: 0 -4px 0 ${({ name }) => (name === 'default' ? 'transparent' : '#babfd4')};
    border-radius: 50%;
    flex: 1;
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40%;
      animation: 1s ${({ isShadowAnimated }) => isShadowAnimated ? box : ''};
    }
  }

  @media screen and (min-width: 1024px){
    ${({ playing }) => playing ? 'width: 300px; height: 295px; border-width: 32px;' : 'width: 200px; height: 195px;'}

  }
  /* @media screen and (min-width: 1024px){
    border-width: 32px;
  } */
`

const colors = {
  paper: {
    base: '#516ef4',
    border: '#2543c3'
  },
  rock: {
    base: '#de3a5a',
    border: '#980e31',
  },
  scissors: {
    base: '#eca81e',
    border: '#c76c14',
  },
  default: {
    base: 'transparent',
    border: 'transparent',
  }
}

function Token({ name = 'default', onClick, isShadowAnimated = false, playing }) {
  function handleClick() {
    if (onClick) {
      onClick(name);
    }
  }

  const color = colors[name];

  return (
    <TokenStyled color={color} onClick={handleClick} name={name} isShadowAnimated={isShadowAnimated} playing={playing}>
      <div className="box">
        {
          name !== 'default' && (
            <img src={`./images/icon-${name}.svg`} alt="icon-game" />
          )
        }

      </div>

    </TokenStyled>
  )
}

export default Token;