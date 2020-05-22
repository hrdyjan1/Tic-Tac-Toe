export type Player = 'x' | 'o' | ''

export type Result = {
    status: String,
    winner?: Player

}
export type Square = {
  player: Player;
  id: number;
};

export type ContextRound = {
  values: Array<Square>;
  player: Player;
  countToWin: number;
};

export type ContextRoundLite = {
  values: Array<Square>;
  player: Player;
};

export type Context = {
  moveNumber: number;
  values: Array<Square>;
  result: Result;
  playerOnTurn: Player;
  countToWin: number;
  maxMoves: number;
};

export type Event =
| { type: 'RESTART' }
| { type: 'GAME_START'}
| { type: 'GAME_OVER'}
| { type: 'MOVE'; move: { id: number}}
