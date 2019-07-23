import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/example">Example</Link>
      </header>
    </div>
  );
}

const Example = () => {
  const [ count, setCount ] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  return (
    <>
      <div>Count #1: <button onClick={() => setCount(count+1)}>{count}</button></div>
      <div>Count #2: <button onClick={() => setCount2(count2+1)}>{count2}</button></div>
    </>
  )
};


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
