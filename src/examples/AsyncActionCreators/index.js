import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Lazy = lazy(() => import('./lazy'))

export const AsyncActionCreators = () => {
  return (
    <Suspense fallback="Loading">
      <Router>
        <Route path="/async-action-creators" component={Lazy} />
      </Router>
    </Suspense>
  )
}
