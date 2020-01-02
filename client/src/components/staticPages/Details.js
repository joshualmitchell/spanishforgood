import React, { Component } from "react";
import { connect } from "react-redux";

import { DETAILS } from "./staticPagesConstants";
import { setActivePage } from "../../actions";

class Details extends Component {
  render() {
    this.props.setActivePage(DETAILS);
    return <div>Incoming Details Page</div>;
  }
}
export default connect(null, { setActivePage })(Details);
