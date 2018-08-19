import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

export const configureStore = preloadState => {
  return createStore(rootReducer, preloadState, applyMiddleware(thunk, logger));
};
