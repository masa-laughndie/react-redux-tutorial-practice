import { combineReducers } from 'redux';
import { todosReducer, TodosState } from './todosReducer';

export interface RootState {
  todos: TodosState;
}

export const rootReducer = combineReducers<RootState>({
  todos: todosReducer
});
