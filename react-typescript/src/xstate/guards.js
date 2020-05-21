// GUARDS === CONDITIONS => target / action

import { toggleTurn } from './actions';
import { checkVerticalWin, checkHorizontalWin, checkDiagonalWin } from './helpers/guards';

export const checkWin = ({ values, countToWin, playerOnTurn }) => {
  const playerOfpreviousMove = toggleTurn({ playerOnTurn });
  const data = { values, countToWin, player: playerOfpreviousMove };

  const isVerticalWin = checkVerticalWin(data);
  const isDiagonalWin = checkDiagonalWin(data);
  const isHorizontalWin = checkHorizontalWin(data);

  if (isHorizontalWin || isVerticalWin || isDiagonalWin) {
    return true;
  }
  return false;
};

export const checkDraw = ({ maxMoves, moveNumber }) => maxMoves === moveNumber;

export default { checkWin, checkDraw };
