import { Provider } from 'react-redux';
import React from 'react';
import { combineReducers, createStore } from 'redux';
import { todos, visibilityFilter } from './reducers';
import Component from './Component.container';

const store = createStore(combineReducers({ todos, visibilityFilter }));

export const ReactRedux = () => (
  <Provider store={store}>
    <Component />
  </Provider>
);
