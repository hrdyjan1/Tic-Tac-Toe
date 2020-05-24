import { enhanceItemArray, getRootSquare } from '../helpers/functions';
import { STATUS_DRAW, STATUS_WIN_LOSE, fillWithDefaultPlayerValues } from './helpers/actions';
import { Player, Square, Context, Result, Move } from './types';

// Actions - Player
export const increase = ({ moveNumber }: { moveNumber: number }) => moveNumber + 1;
export const toggleTurn = ({ playerOnTurn }: Context): Player => (playerOnTurn === 'x' ? 'o' : 'x');
export const addMove = (
  { values, playerOnTurn }: Context,
  { move }: { move: Move }
): Array<Square> => enhanceItemArray(values, move.id, { player: playerOnTurn });

// Getters





export const getWinnerResult = (context: Context): Result => ({
  status: STATUS_WIN_LOSE,
  winner: toggleTurn(context),
});
export const getDrawResult = (): Result => ({ status: STATUS_DRAW });
export const getCountToWin = ({ maxMoves }: Context) => getRootSquare(maxMoves);

// Take care of correct settings
export const preventCorrectMoves = ({ maxMoves }: Context): number => {
  const validMaxMoves = Number.isInteger(getRootSquare(maxMoves)) ? maxMoves : 9;
  return maxMoves < 4 ? 9 : validMaxMoves;
};

export const fillDefaultValues = ({ maxMoves }: Context): Array<Square> =>
  [...Array(maxMoves)].map(fillWithDefaultPlayerValues);

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
