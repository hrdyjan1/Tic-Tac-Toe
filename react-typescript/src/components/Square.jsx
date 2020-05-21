/* eslint-disable react/prop-types */
import React from 'react';

function Square({ square, onClick, onClickGeneral }) {
  const onClickWithValue = () => {
    onClickGeneral({ id: square.id });
  };

  return (
    <button type="button" className="square" onClick={onClick || onClickWithValue}>
      {square.player}
    </button>
  );
}

export default Square;
