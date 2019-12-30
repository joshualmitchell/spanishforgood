import React, { Component } from "react";
import { connect } from "react-redux";

import { ABOUT } from "./staticPagesConstants";
import { setActivePage } from "../../actions";

class About extends Component {
  render() {
    this.props.setActivePage(ABOUT);
    return <div>Incoming About Page</div>;
  }
}
export default connect(null, { setActivePage })(About);
