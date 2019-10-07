import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "screens/Home";
import HomeDetail from "screens/HomeDetail";

import './App.css';

const App = () => {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/home-detail">Home detail</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/home-detail" component={HomeDetail} />
          </div>
        </Router>
    )
};

export default App;
