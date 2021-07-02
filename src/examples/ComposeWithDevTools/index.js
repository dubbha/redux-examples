import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Lazy = lazy(() => import('./lazy'))

export const ComposeWithDevTools = () => {
  return (
    <Suspense fallback="Loading">
      <Router>
        <Route path="/compose-with-dev-tools" component={Lazy} />
      </Router>
    </Suspense>
  )
}
