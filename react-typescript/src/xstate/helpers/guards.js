export const checkIfAllSamePlayer = ({ values, player }) => values.every(
  (v) => v.player === player,
);

export const checkVerticalWin = ({ values, countToWin, player }) => {
  for (
    let pointer = 0;
    countToWin + pointer <= values.length;
    pointer += countToWin
  ) {
    const valuesToCheck = values.filter(
      (_, index) => pointer <= index && index < countToWin + pointer,
    );

    const isThereWinner = checkIfAllSamePlayer({
      values: valuesToCheck,
      player,
    });

    if (isThereWinner) {
      return true;
    }
  }
  return false;
};

export const checkHorizontalWin = ({ values, countToWin, player }) => {
  for (let pointer = 0; pointer < countToWin; pointer += 1) {
    const valuesToCheck = values.filter(
      (_, index) => (index + pointer) % countToWin === 0,
    );

    const isThereWinner = checkIfAllSamePlayer({
      values: valuesToCheck,
      player,
    });

    if (isThereWinner) {
      return true;
    }
  }
  return false;
};

export const checkDiagonalWin = ({ values, countToWin, player }) => {
  const toBottomRightValues = values.filter(
    (_, index) => index % (countToWin + 1) === 0,
  );

  const toBottomLeftValues = values.filter((_, index) => {
    const row = Math.floor(index / countToWin) + 1;
    return (index + row) % countToWin === 0;
  });

  const isThereWinner = checkIfAllSamePlayer({
    values: toBottomRightValues,
    player,
  })
    || checkIfAllSamePlayer({
      values: toBottomLeftValues,
      player,
    });

  if (isThereWinner) {
    return true;
  }
  return false;
};

export default {
  checkIfAllSamePlayer,
  checkVerticalWin,
  checkHorizontalWin,
  checkDiagonalWin,
};
