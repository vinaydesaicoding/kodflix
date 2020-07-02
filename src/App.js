import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import Details from './Details';
import './App.css';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:movieId' component={Details} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;



  
