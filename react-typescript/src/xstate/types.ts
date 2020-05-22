export type EventTypes = 'RESTART' | 'GAME_START' | 'GAME_OVER';
export type EventTypeMove = 'MOVE'
export type Player = 'x' | 'o' | '';
export type Move = { id: number };

export type Result = {
  status: String;
  winner?: Player;
};
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


export type EventMove = { type: EventTypeMove; move: Move };
export type Event = { type: EventTypes } | EventMove;
