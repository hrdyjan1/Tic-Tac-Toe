// GUARDS === CONDITIONS => target / action

import { toggleTurn } from './actions';
import { checkVerticalWin, checkDiagonalWin, checkHorizontalWin } from './helpers/guards';
import { Context, ContextRound } from './types';

export const checkWin = (context: Context): boolean => {
  const playerPreviousMove = toggleTurn(context);
  const data: ContextRound = { ...context, player: playerPreviousMove };

  const isVerticalWin = checkVerticalWin(data);
  const isDiagonalWin = checkDiagonalWin(data);
  const isHorizontalWin = checkHorizontalWin(data);

  if (isHorizontalWin || isVerticalWin || isDiagonalWin) {
    return true;
  }
  return false;
};

export const checkDraw = ({ maxMoves, moveNumber }: Context): boolean => maxMoves === moveNumber;

export default { checkWin, checkDraw };
