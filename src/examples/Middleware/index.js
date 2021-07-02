import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Lazy = lazy(() => import('./lazy'))

export const Middleware = () => {
  return (
    <Suspense fallback="Loading">
      <Router>
        <Route path="/middleware" component={Lazy} />
      </Router>
    </Suspense>
  )
}
