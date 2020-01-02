import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import {HashRouter} from "react-router-dom";

import About from "./components/About";

class App extends Component {
  render() {
    return (
       <HashRouter basename='/'>
      <div>
        <Router>
          <Switch>
            <Route path="/about" component={About} />
            {/* 
            To-Do: Implement the About page of yourself
            with photos and style them.
            
            */}
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
        </HashRouter>
    );
  }
}
export default App;
