import { Todo } from './CommonTypes';

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export type Action =
  | { type: ActionTypes.ADD_TODO }
  | { type: ActionTypes.FETCH_TODOS_REQUEST }
  | { type: ActionTypes.FETCH_TODOS_SUCCESS; payload: { todos: Todo[] } }
  | { type: ActionTypes.FETCH_TODOS_FAILURE }
  | { type: ActionTypes.TOGGLE_TODO };
