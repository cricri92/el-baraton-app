import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "screens/Home";
import HomeDetail from "screens/HomeDetail";
import Header from "components/Header";

import 'App.scss';

const App = () => {
    return (
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/home-detail" component={HomeDetail} />
          </div>
        </Router>
    )
};

export default App;
