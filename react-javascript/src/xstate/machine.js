import { Machine, assign } from 'xstate';

import { GAME_OFF, GAME_ON } from './states';
import {
  RESTART, GAME_OVER, GAME_START, MOVE,
} from './events';
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

// Objects
const initialContext = {
  moveNumber: 0,
  values: [],
  result: null,
  playerOnTurn: 'x',
};

// Machine
// Only two players / 'x' or 'o'
// Indexing from 0
const ticTacToeMachine = Machine(
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
          assign({ maxMoves: preventCorrectMoves }),
          assign({ values: fillDefaultValues, countToWin: getCountToWin }),
        ],
        on: {
          // Check END game
          '': [
            // Check WIN
            {
              target: GAME_OFF,
              cond: checkWin, // Check only player of previous move
              actions: assign({ result: getWinnerResult }),
            },
            // Check DRAW
            {
              target: GAME_OFF,
              cond: checkDraw,
              actions: assign({ result: getDrawResult }),
            },
          ],
          [MOVE]: {
            actions: assign({
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
    guards: [checkWin, checkDraw],
  },
);

export default ticTacToeMachine;
