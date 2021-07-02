import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Lazy = lazy(() => import('./lazy'))

export const CombineReducers = () => {
  return (
    <Suspense fallback="Loading">
      <Router>
        <Route path="/combine-reducers" component={Lazy} />
      </Router>
    </Suspense>
  )
}
