/* eslint-disable react/prop-types */
import React from 'react';
import Square from './Square';
import {
  getRootSquare,
  checkIsInteger,
  shrinkArray,
  doNothing,
} from '../helpers/functions';
import { Move, Square as SquareType } from '../xstate/types';

interface Board {
    values: SquareType[];
    onSquareClick: (move: Move) => void
}

function Board({ values, onSquareClick }: Board) {
  const { length } = values;

  // Empty array or not array
  if (!Array.isArray(values) || length === 0) {
    throw new Error('Empty or not array values in board.');
  }

  const squareRoot = getRootSquare(length);
  const isSquareRootInteger = checkIsInteger(squareRoot);

  // Impossible to make square / wrong count of values
  if (!isSquareRootInteger) {
    throw new Error('Unable to make square board.');
  }

  // E.g. From [1,2,3,4] => [[1,2], [3,4]]
  const shrinedArray = shrinkArray(values, squareRoot);

  return (
    <div className="board">
      {shrinedArray.map((arrayOfSquares) => (
        <div className="board-row">
          {arrayOfSquares.map((square) => {
            const isTaken = square.player !== '';
            return (
              <Square
                key={square.id}
                onClickGeneral={isTaken ? doNothing : onSquareClick}
                square={square}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
