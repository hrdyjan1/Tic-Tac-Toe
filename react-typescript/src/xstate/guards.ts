// GUARDS === CONDITIONS => target / action

import { toggleTurn } from './actions';
import { checkVerticalWin, checkDiagonalWin, checkHorizontalWin } from './helpers/guards';
import { Context } from './types';
// import { checkVerticalWin, checkHorizontalWin, checkDiagonalWin } from './helpers/guards.ts';

export const checkWin = (context: Context) => {
  const playerOfpreviousMove = toggleTurn(context);
  const data = { ...context, player: playerOfpreviousMove };

  const isVerticalWin = checkVerticalWin(data);
  const isDiagonalWin = checkDiagonalWin(data);
  const isHorizontalWin = checkHorizontalWin(data);

  if (isHorizontalWin || isVerticalWin || isDiagonalWin) {
    return true;
  }
  return false;
};

export const checkDraw = ({ maxMoves, moveNumber }: Context) => maxMoves === moveNumber;

export default { checkWin, checkDraw };
