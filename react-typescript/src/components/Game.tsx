import React from 'react';
import * as Xstate from '@xstate/react';
import Board from './Board';

import {
  MOVE, RESTART, GAME_START, GAME_QUIT,
} from '../xstate/events';
import { Move, Action } from '../xstate/types';
import states from '../xstate/states';
import ticTacToeMachine from '../xstate/machine';

const initialMachineOptions = {};

function Game() {
  const [state, send] = Xstate.useMachine(ticTacToeMachine, initialMachineOptions);

  const onSquareClick = (move: Move) => send(MOVE, { move });
  const quit = () => send(GAME_QUIT);
  const start = () => send(GAME_START);
  const restart = () => send(RESTART);

  const isResult = state.context.result.status !== '';
  const isMachineGameOff = state.matches(states.GAME_OFF);

  const action: Action = isMachineGameOff
    ? { name: 'START', onClick: start }
    : { name: 'QUIT', onClick: quit };

  return (
    <div className="game">
      <div className="game-board">
        {!isMachineGameOff ? (
          <Board values={state.context.values} onSquareClick={onSquareClick} />
        ) : null}
      </div>
      <div className="game-info">
        <button type="button" onClick={restart}>
          Restart
        </button>
        <button type="button" onClick={action.onClick}>
          {action.name}
        </button>
        <div>{isResult ? state.context.result.status : null}</div>
      </div>
    </div>
  );
}

export default Game;
