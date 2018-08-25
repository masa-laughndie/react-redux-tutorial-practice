import * as apis from '../apis';
import { ActionTypes, Action } from '../types/ActionTypes';
import { NormalizeTodos } from '../types/CommonTypes';

const fetchTodosRequest = (): Action => ({
  type: ActionTypes.FETCH_TODOS_REQUEST
});

const fetchTodosSuccess = (todos: NormalizeTodos): Action => ({
  type: ActionTypes.FETCH_TODOS_SUCCESS,
  payload: todos
});

const fetchTodosFailure = (): Action => ({
  type: ActionTypes.FETCH_TODOS_FAILURE
});

export const fetchTodos = () => {
  return async dispatch => {
    dispatch(fetchTodosRequest());

    try {
      const todos = await apis.fetchTodos();
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      dispatch(fetchTodosFailure);
      alert(error);
    }
  };
};
