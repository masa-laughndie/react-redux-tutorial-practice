import { Todo } from './CommonTypes';

export enum ActionTypes {
  ADD_TODO_REQUEST = 'ADD_TODO_REQUEST',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
  ADD_TODO_FAILURE = 'ADD_TODO_FAILURE',
  FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export type Action =
  | { type: ActionTypes.ADD_TODO_REQUEST; payload: { title: string } }
  | { type: ActionTypes.ADD_TODO_SUCCESS; payload: { todo: Todo } }
  | { type: ActionTypes.ADD_TODO_FAILURE }
  | { type: ActionTypes.FETCH_TODOS_REQUEST }
  | {
      type: ActionTypes.FETCH_TODOS_SUCCESS;
      payload: { todoIds: number[]; todosById: Record<number, Todo> };
    }
  | { type: ActionTypes.FETCH_TODOS_FAILURE }
  | { type: ActionTypes.TOGGLE_TODO };
