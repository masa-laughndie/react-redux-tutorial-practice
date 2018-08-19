import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

export const configureStore = preloadState => {
  return createStore(rootReducer, preloadState, applyMiddleware(thunk));
};
