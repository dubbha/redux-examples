import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Component } from './Component';

export const ReduxToolkit = () => (
  <Provider store={store}>
    <Component />
  </Provider>
);
