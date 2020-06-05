import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './button';

const RulesStyled = styled.div`
  /* margin: auto auto; */
  text-align: center;
  &::before {
      content: '';
      display: ${({ visible }) => visible ? 'block' : 'none'};
      position: absolute;
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0, 0.6);
  }
  .rules-modal {
    background: white;
    padding: 4em 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      color: #3b4262;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: -2px;
      margin-bottom: 1em;
    }
    .close-button {
      margin-top: 2em;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px){
   .button {
      position: fixed;
      right: 1.5em;
      bottom: 1.5em;
   }
   .rules-modal {
      width: 400px;
      margin: auto;
      top: 0;
      bottom: initial;
      transform: translateY(50%);
      border-radius: 10px;
      padding: 2em;
      box-sizing: border-box;
      h2 {
        font-size: 32px;
        align-self: flex-start;
        margin: 0 0 1.2em 0;
      }
   }
   .close-button {
     position: absolute;
     right: 2em;
     top: 0.8em;
   }
  }
`
function Rules() {
  const [visible, setVisible] = useState(false);
  function handleToggleClick() {
    setVisible(!visible);
  }
  return (
    <RulesStyled visible={visible} >
      {
        (visible) && (
          <div className='rules-modal'>
            <h2>Rules</h2>
            <img src='./images/image-rules.svg' alt='rules of game' />
            <img className='close-button' onClick={handleToggleClick} src='./images/icon-close.svg' />
          </div>
        )
      }
      <Button onClick={handleToggleClick} className="button" >
        Rules
      </Button>
    </RulesStyled>
  )
}

export default Rules;