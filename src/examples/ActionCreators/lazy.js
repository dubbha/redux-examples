import React from 'react';
import { Provider } from 'react-redux';
import store from './example';

const Lazy = () =>
  <Provider store={store}>
    See console
  </Provider>

export default Lazy
