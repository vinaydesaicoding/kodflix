import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/Details' component={Details} />
        </div>
      </div>
    </Router>
  );
}

export default App;