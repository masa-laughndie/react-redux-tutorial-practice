import axios from 'axios';

export const fetchTodos = () => axios.get('http://localhost:4000/todos');
