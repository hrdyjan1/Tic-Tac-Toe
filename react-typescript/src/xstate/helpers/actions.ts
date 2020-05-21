export const STATUS_WIN_LOSE = 'STATUS_WIN_LOSE';
export const STATUS_DRAW = 'STATUS_DRAW';

// Helpers - not exported
export const fillWithDefaultPlayerValues = (_: undefined, index: number) => ({
  id: index,
  player: '',
});

export default { STATUS_DRAW, STATUS_WIN_LOSE, fillWithDefaultPlayerValues };
