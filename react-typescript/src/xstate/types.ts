export type EventTypes = 'RESTART' | 'GAME_START' | 'GAME_QUIT';
export type EventTypeMove = 'MOVE';
export type Player = 'x' | 'o' | '';
export type Move = { id: number };
export type ArrayOfNothingOrArrays = Array<undefined | null | any[]>;

export type ActionStart = { name: 'START'; onClick: () => {} };
export type ActionQuit = { name: 'QUIT'; onClick: () => {} };
export type Action = ActionStart | ActionQuit;

export type EventMove = { type: EventTypeMove; move: Move };
export type Event = { type: EventTypes } | EventMove;

export interface Result {
  status: String;
  winner?: Player;
}

export interface Square {
  player: Player;
  id: number;
}

export interface ContextRoundLite {
  values: Array<Square>;
  player: Player;
}

export interface ContextRound extends ContextRoundLite {
  countToWin: number;
}

export interface Context {
  moveNumber: number;
  values: Array<Square>;
  result: Result;
  playerOnTurn: Player;
  countToWin: number;
  maxMoves: number;
}
