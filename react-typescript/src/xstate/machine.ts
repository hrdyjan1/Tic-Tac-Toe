import { Machine, assign } from 'xstate';

import { GAME_OFF, GAME_ON } from './states';
import { RESTART, GAME_OVER, GAME_START, MOVE } from './events';
import {
  preventCorrectMoves,
  fillDefaultValues,
  getWinnerResult,
  getCountToWin,
  getDrawResult,
  addMove,
  increase,
  toggleTurn,
} from './actions';
import { checkWin, checkDraw } from './guards';
import { Context, Event, Move, EventMove } from './types';

// Objects
const initialContext: Context = {
  moveNumber: 0,
  values: [],
  result: { status: '' },
  playerOnTurn: 'x',
  maxMoves: 9,
  countToWin: 3,
};

// Machine
const ticTacToeMachine = Machine<Context, Event>(
  {
    id: 'TicTacToeMachineId',
    initial: GAME_ON,
    context: {
      ...initialContext,
      //   maxMoves: 16, // Can be overwrite
    },
    states: {
      [GAME_ON]: {
        entry: [
          assign<Context>({ maxMoves: preventCorrectMoves }),
          assign<Context>({ values: fillDefaultValues, countToWin: getCountToWin }),
        ],
        on: {
          // Check END game
          '': [
            // Check WIN
            {
              target: GAME_OFF,
              cond: checkWin, // Check only player of previous move
              actions: assign<Context>({ result: getWinnerResult }),
            },
            // Check DRAW
            {
              target: GAME_OFF,
              cond: checkDraw,
              actions: assign<Context>({ result: getDrawResult }),
            },
          ],
          [MOVE]: {
            actions: assign<Context, EventMove>({
              values: addMove,
              playerOnTurn: toggleTurn,
              moveNumber: increase,
            }),
          },
          [RESTART]: {
            actions: assign({ ...initialContext, values: fillDefaultValues }),
          },
          [GAME_OVER]: {
            target: GAME_OFF,
          },
        },
      },
      [GAME_OFF]: {
        on: {
          [RESTART]: {
            target: GAME_ON,
            actions: assign(initialContext),
          },
          [GAME_START]: {
            target: GAME_ON,
            actions: assign(initialContext),
          },
        },
      },
    },
  },
  {
    guards: { checkWin, checkDraw },
  }
);

export default ticTacToeMachine;
