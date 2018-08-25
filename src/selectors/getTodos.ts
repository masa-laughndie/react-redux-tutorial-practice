import { RootState } from '../reducers/rootReducer';
import { Todo } from '../types/CommonTypes';

interface Todos {
  todos: Todo[];
  loading: boolean;
}

export const getTodos = (state: RootState): Todos => {
  const todos = state.todos.todoIds.map(id => state.todos.todosById[id]);
  const loading = state.todos.loading;

  return { todos, loading };
};
