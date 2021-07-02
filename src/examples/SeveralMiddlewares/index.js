import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Lazy = lazy(() => import('./lazy'))

export const SeveralMiddlewares = () => {
  return (
    <Suspense fallback="Loading">
      <Router>
        <Route path="/several-middlewares" component={Lazy} />
      </Router>
    </Suspense>
  )
}
