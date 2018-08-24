import { Reducer } from 'redux';
import { ActionTypes, Action } from '../types/ActionTypes';
import { Todo } from '../types/CommonTypes';

export interface TodosState {
  todos: Todo[];
  loading: boolean;
}

const initialState: TodosState = {
  todos: [],
  loading: true
};

export const todosReducer: Reducer<TodosState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      /* TODO */
      return state;
    case ActionTypes.TOGGLE_TODO:
      /* TODO */
      return state;
    default:
      return state;
  }
};
