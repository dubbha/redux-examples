import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Lazy = lazy(() => import('./lazy'))

export const ReduxDevTools = () => {
  return (
    <Suspense fallback="Loading">
      <Router>
        <Route path="/redux-dev-tools" component={Lazy} />
      </Router>
    </Suspense>
  )
}
