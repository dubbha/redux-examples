import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Lazy = lazy(() => import('./lazy'))

export const ActionCreators = ({ match }) =>
  <Suspense fallback="Loading">
    <Router>
      <Route path="/action-creators" component={Lazy} />
    </Router>
  </Suspense>
