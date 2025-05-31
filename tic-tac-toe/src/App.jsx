import { useState } from 'react';
import './App.css';
import Block from './Components/Block';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const checkWinner = (newState) => {
    const winningCombinations = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6],[1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]

    for (let combination of winningCombinations){
      const [a, b, c] = combination;
      console.log(combination)
      if(newState[a] && newState[a] === newState[b] && newState[a] === newState[c]) {
        return newState[a];
      }
    }

    if(!newState.includes(null)) {
      return 'Draw';
    }

    return null;

  };

  const handleBlockClick = (index) => {
    if (state[index] || winner) return;
    const newState = [...state];
    console.log('nestate', newState);
    newState[index] = currentPlayer;
    setState(newState);
    const gameWinner = checkWinner(newState);
    setWinner(gameWinner);
    if(!gameWinner) {
      setCurrentPlayer(currentPlayer === 'X' ? 'O': 'X');
    }
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  }

  console.log('state, ', state);
  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="status">
        {winner ? (
          winner === 'Draw' ? 'Game is a Draw!' : `Winner: ${winner}`
        ) : (
          `Current Player: ${currentPlayer}`
        )}
      </div>
      {winner && <button onClick={resetGame}>Restart</button>}

      <div className="board">
        <div className="row">
          <Block value={state[0]} onClick={() => handleBlockClick(0)} />
          <Block value={state[1]} onClick={() => handleBlockClick(1)}/>
          <Block value={state[2]} onClick={() => handleBlockClick(2)}/>
        </div>
        <div className="row">
          <Block value={state[3]} onClick={() => handleBlockClick(3)}/>
          <Block value={state[4]} onClick={() => handleBlockClick(4)}/>
          <Block value={state[5]} onClick={() => handleBlockClick(5)}/>
        </div>
        <div className="row">
          <Block value={state[6]} onClick={() => handleBlockClick(6)}/>
          <Block value={state[7]} onClick={() => handleBlockClick(7)}/>
          <Block value={state[8]} onClick={() => handleBlockClick(8)}/>
        </div>
      </div>
    </div>
  );
}

export default App;