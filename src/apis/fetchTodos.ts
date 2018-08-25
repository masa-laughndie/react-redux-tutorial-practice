import axios from 'axios';
import { Todo, NormalizeTodos } from '../types/CommonTypes';

const normalize = (todos: Todo[]): NormalizeTodos => {
  const todoIds = [];
  const todosById = {};

  todos.forEach(todo => {
    todoIds.push(todo.id);
    todosById[todo.id] = todo;
  });

  return {
    todoIds,
    todosById
  };
};

export const fetchTodos = async (): Promise<NormalizeTodos> => {
  const response = await axios.get('http://localhost:4000/todos');

  return normalize(response.data);
};
