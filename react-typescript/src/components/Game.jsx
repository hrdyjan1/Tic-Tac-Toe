import React from 'react';
import { useMachine } from '@xstate/react';
import Board from './Board';

import ticTacToeMachine from '../xstate/machine';
import { MOVE, RESTART } from '../xstate/events';

function Game() {
  const [state, send] = useMachine(ticTacToeMachine);
  const onSquareClick = (move) => send(MOVE, { move });
  const restart = () => send(RESTART);
  const isResult = state.context.result.status !== '';

  return (
    <div className="game">
      <div className="game-board">
        <Board values={state.context.values} onSquareClick={onSquareClick} />
      </div>
      <div className="game-info">
        <button type="button" onClick={restart}>
          Restart
        </button>
        <div>{isResult ? state.context.result.status : null}</div>
      </div>
    </div>
  );
}

export default Game;
