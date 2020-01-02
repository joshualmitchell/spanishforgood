import React, { Component } from "react";
import { connect } from "react-redux";

import { PRICES } from "./staticPagesConstants";
import { setActivePage } from "../../actions";

class Prices extends Component {
  render() {
    this.props.setActivePage(PRICES);
    return <div>Incoming Prices Page</div>;
  }
}
export default connect(null, { setActivePage })(Prices);
