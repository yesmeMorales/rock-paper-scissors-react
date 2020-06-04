import React from 'react';
import styled from 'styled-components';

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
  /* z-index: 2; */
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
  }
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

function Token({ name = 'default', onClick }) {
  function handleClick() {
    if (onClick) {
      onClick(name);
    }
  }

  const color = colors[name];

  return (
    <TokenStyled color={color} onClick={handleClick} name={name}>
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