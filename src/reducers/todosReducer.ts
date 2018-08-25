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
    case ActionTypes.FETCH_TODOS_REQUEST:
    case ActionTypes.FETCH_TODOS_FAILURE:
      return {
        ...state,
        todos: [],
        loading: true
      };
    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.todos,
        loading: false
      };
    case ActionTypes.ADD_TODO_SUCCESS:
      /* TODO */
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      };
    case ActionTypes.TOGGLE_TODO:
      /* TODO */
      return state;
    default:
      return state;
  }
};
