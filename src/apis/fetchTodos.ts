import axios from 'axios';
import { Todo } from '../types/CommonTypes';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get('http://localhost:4000/todos');

  return response.data;
};
