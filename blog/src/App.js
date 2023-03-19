import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Create from './components/Create';
//npx json-server --watch data/db.json --port 8000

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="content">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/create" component={Create} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
