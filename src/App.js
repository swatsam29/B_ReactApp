import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './SignUp';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
