import { enhanceItemArray, getRootSquare } from '../helpers/functions';
import {
  STATUS_DRAW,
  STATUS_WIN_LOSE,
  fillWithDefaultPlayerValues,
} from './helpers/actions';

// Actions - Player
export const increase = ({ moveNumber }) => moveNumber + 1;
export const toggleTurn = ({ playerOnTurn }) => (playerOnTurn === 'x' ? 'o' : 'x');
export const addMove = ({ values, playerOnTurn }, { move }) => enhanceItemArray(values,
  move.id, { player: playerOnTurn });

// Getters
export const getWinnerResult = (context) => ({
  status: STATUS_WIN_LOSE,
  winner: toggleTurn(context),
});
export const getDrawResult = () => ({ status: STATUS_DRAW });
export const getCountToWin = ({ maxMoves }) => getRootSquare(maxMoves);

// Take care of correct settings
export const preventCorrectMoves = ({ maxMoves }) => {
  const validMaxMoves = Number.isInteger(getRootSquare(maxMoves))
    ? maxMoves
    : 9;
  return maxMoves < 4 ? 9 : validMaxMoves;
};
// export const fillDefaultValues = ({ maxMoves }) => Array.apply(null, Array(maxMoves))
//   .map(fillWithDefaultPlayerValues);

export const fillDefaultValues = ({ maxMoves }) => [...Array(maxMoves)]
  .map(fillWithDefaultPlayerValues);

export default {
  addMove,
  increase,
  toggleTurn,
  getDrawResult,
  getCountToWin,
  getWinnerResult,
  fillDefaultValues,
  preventCorrectMoves,
};
