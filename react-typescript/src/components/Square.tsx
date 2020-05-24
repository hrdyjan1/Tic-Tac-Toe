/* eslint-disable react/prop-types */
import React from 'react';
import { Square as SquareType, Move } from '../xstate/types';
import { checkIsDefined } from '../helpers/functions';

interface SquareElement {
  square: SquareType;
  onClick?: (x: any) => void;
  onClickGeneral?: (move: Move) => void;
}

function Square({ square, onClick, onClickGeneral }: SquareElement) {
  const onClickWithValue = () => {
    if (checkIsDefined(onClickGeneral)) {
      onClickGeneral({ id: square.id });
    }
  };

  return (
    <button type="button" className="square" onClick={onClick || onClickWithValue}>
      {square.player}
    </button>
  );
}

export default Square;
