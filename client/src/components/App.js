import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Home from "./staticPages/Home";
import Landing from "./staticPages/Landing";
import Prices from "./staticPages/Prices.js";
import Contact from "./staticPages/Contact";
import About from "./staticPages/About";
import Details from "./staticPages/Details";
import Resources from "./staticPages/Resources";

import Header from "./header/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route
              exact
              path="/"
              component={this.props.auth ? Home : Landing}
            />
            <Route path="/prices" component={Prices} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/details" component={Details} />
            <Route path="/resources" component={Resources} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
