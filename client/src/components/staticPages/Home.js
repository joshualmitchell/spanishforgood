import React, { Component } from "react";
import { connect } from "react-redux";

import { HOME } from "./staticPagesConstants";
import { setActivePage } from "../../actions";

class Home extends Component {
  render() {
    this.props.setActivePage(HOME);
    return <div>Incoming Home Page</div>;
  }
}
export default connect(null, { setActivePage })(Home);
