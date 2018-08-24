import * as apis from '../apis';
import { ActionTypes, Action } from '../types/ActionTypes';
import { Todo } from '../types/CommonTypes';

const addTodoRequest = (title: string): Action => ({
  type: ActionTypes.ADD_TODO_REQUEST,
  payload: { title }
});

const addTodoSuccess = (todo: Todo): Action => ({
  type: ActionTypes.ADD_TODO_SUCCESS,
  payload: { todo }
});

const addTodoFailure = (): Action => ({
  type: ActionTypes.ADD_TODO_FAILURE
});

export const addTodo = (title: string) => {
  return async dispacth => {
    dispacth(addTodoRequest(title));

    try {
      const todo = await apis.addTodo(title);
      dispacth(addTodoSuccess(todo));
    } catch (error) {
      dispacth(addTodoFailure);
      alert(error);
    }
  };
};
