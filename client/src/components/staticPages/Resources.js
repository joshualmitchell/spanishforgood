import React, { Component } from "react";
import { connect } from "react-redux";

import { RESOURCES } from "./staticPagesConstants";
import { setActivePage } from "../../actions";

class Resources extends Component {
  render() {
    this.props.setActivePage(RESOURCES);
    return <div>Incoming Resources Page</div>;
  }
}
export default connect(null, { setActivePage })(Resources);
