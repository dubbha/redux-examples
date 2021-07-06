import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos, visibilityFilter, keyword } from './reducers';
import Component from './Component.container';

const store = createStore(
  combineReducers({
    todos,
    visibilityFilter,
    keyword,
  }),
  composeWithDevTools(),
);

export const ReselectConnect = () => (
  <Provider store={store}>
    <Component />
  </Provider>
);
