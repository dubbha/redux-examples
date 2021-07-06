import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { User } from './features/user/User';

export const ReduxToolkitQuery = () => (
  <Provider store={store}>
    <User />
  </Provider>
);
