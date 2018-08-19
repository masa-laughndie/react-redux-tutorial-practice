import { Todo } from '../types';

export const fetchTodos = () => {
  const data: Todo[] = [
    { userId: 1, id: 1, title: 'foo', completed: false },
    { userId: 1, id: 2, title: 'bar', completed: false }
  ];
  return Promise.resolve({ data });
};
