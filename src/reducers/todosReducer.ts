import { Reducer } from 'redux';
import { ActionTypes, Action } from '../types/ActionTypes';
import { Todo } from '../types/CommonTypes';

export interface TodosState {
  todoIds: number[];
  todosById: Record<number, Todo>;
  loading: boolean;
}

const initialState: TodosState = {
  todoIds: [],
  todosById: {},
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
        todoIds: [],
        todosById: {},
        loading: true
      };
    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todoIds: action.payload.todoIds,
        todosById: action.payload.todosById,
        loading: false
      };
    case ActionTypes.ADD_TODO_SUCCESS:
      const { todo } = action.payload;
      return {
        ...state,
        todoIds: [...state.todoIds, todo.id],
        todosById: {
          ...state.todosById,
          [todo.id]: todo
        }
      };
    case ActionTypes.TOGGLE_TODO:
      /* TODO */
      return state;
    default:
      return state;
  }
};
