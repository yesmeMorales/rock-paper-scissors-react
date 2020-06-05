/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Token from './token';
import { WhiteButton } from './button';

import { ScoreContext } from '../App';

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;

  & div:nth-of-type(3) {
    grid-column: span 2;
  }

  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .results {
    text-align: center;
    h2 {
      text-transform: uppercase;
      font-size: 56px;
      margin: 10px;
    }
  }

  .line {
    display: ${({ playing }) => !playing ? 'block' : 'none'};
    height: 14px;
    background: rgba(0,0,0,.2);
    position: absolute;
    width: 230px;
    /* left: 85px;
    right: 88px; */
    top: 50px;
    &:before {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(60deg);
      transform-origin: left top;
    }
    &:after {
      content: '';
      height: 14px;
      background: rgba(0,0,0,.2);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      transform: rotate(-60deg);
      transform-origin: right top;
    }
  }

  @media screen and (min-width: 1024px){
     /* grid-gap: 30px 140px; */
    grid-template-columns: 300px 300px;
    ${({ playing, result }) => (playing && result) && 'grid-template-columns: 300px 110px 110px 300px;'}

    & div:nth-of-type(3) {
      ${({ playing, result }) => (playing && result) && 'grid-column: 2 / 4; grid-row: 1;'}
    }
    .line {
      width: 330px;

    }
    .results {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

    .in-game {
      font-size: 1.3em;
      display: flex;
      flex-direction: column;
      >div {
        order: 2;
      }
      >p {
        order: 1;
        margin-bottom: 2em;
      }
    }
  }
`
const elements = [
  'paper',
  'scissors',
  'rock',
];

function Table() {

  const { score, setScore } = useContext(ScoreContext);
  const [playing, setPlaying] = useState(false);
  const [housePick, setHousePick] = useState('default');
  const [pick, setPick] = useState('');
  const [result, setResult] = useState('');


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)];
        setHousePick(pick);
      }, 75)
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    })
    // setInterval(() => {
    //   const pick = elements[getRandomInt(0, 3)];
    //   console.log(pick);
    //   setHousePick(pick);
    // }, 100);

  }

  async function onClick(name) {
    setPlaying(true);
    setPick(name);
    const house = await launchHousePick();
    console.log('la casa eligió', house);
    const results = analizeGame(name, house);
    setResult(results);
    console.log(results);
    if (results === 'win') {
      setScore(score + 1);

      console.log(score);
    }
  }

  function analizeGame(pick, housePick) {
    console.log('Tu elegiste ', pick);
    if (housePick === pick) {
      return 'draw';
    }
    switch (pick) {
      case 'paper': {
        if (housePick === 'scissors') {
          return 'lose';
        }
        return 'win';
      }

      case 'scissors': {
        if (housePick === 'paper') {
          return 'win';
        }
        return 'lose';
      }

      case 'rock': {
        if (housePick === 'paper') {
          return 'lose';
        }
        return 'win';
      }

      default:
        break;
    }
  }

  function handleTryAgain() {
    setPlaying(false);
    setResult('');
  }

  return (
    <TableStyled playing={playing} result={result}>
      <>
        <span className="line" />
        {
          (!playing) ? (
            <>
              <Token name="rock" onClick={onClick} />
              <Token name="scissors" onClick={onClick} />
              <Token name="paper" onClick={onClick} />
            </>

          ) : (
              <>
                <div className="in-game">
                  <Token playing={playing} name={pick} isShadowAnimated={(result === 'win')} />
                  <p>You Picked</p>
                </div>
                <div className="in-game">
                  <Token playing={playing} name={housePick} isShadowAnimated={(result === 'lose')} />
                  <p>The house Picked</p>
                </div>
                <div className="results">
                  {
                    result && (
                      <>
                        <h2>YOU {result}</h2>
                        <WhiteButton onClick={handleTryAgain} >
                          Play again
                      </WhiteButton>
                      </>
                    )
                  }


                </div>
              </>
            )
        }
      </>
    </TableStyled>
  )
}
export default Table;