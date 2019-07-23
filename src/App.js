import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Example } from './examples'
import './App.css';

const Home = () => {
  return (
    <>
      <Link to="/example">Example</Link>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/example" component={Example} />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
