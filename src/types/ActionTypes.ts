export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export type Action =
  | { type: ActionTypes.ADD_TODO }
  | { type: ActionTypes.TOGGLE_TODO };
