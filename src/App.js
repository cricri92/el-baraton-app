import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "screens/Home";
import Checkout from "screens/Checkout";
import Header from "components/Header";

import 'App.scss';
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
          <div className="app">
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/checkout" component={Checkout} />
            <Footer />
          </div>
        </Router>
    )
};

export default App;
