import React from 'react'
import { Provider } from 'react-redux'
import store from './example'

const Lazy = () =>
  <Provider store={store}>
    See Redux Dev Tools
  </Provider>

export default Lazy
