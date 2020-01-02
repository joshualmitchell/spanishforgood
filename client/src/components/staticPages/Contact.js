import React, { Component } from "react";
import { connect } from "react-redux";

import { CONTACT } from "./staticPagesConstants";
import { setActivePage } from "../../actions";

class Contact extends Component {
  render() {
    this.props.setActivePage(CONTACT);
    return <div>Incoming Contact Page</div>;
  }
}
export default connect(null, { setActivePage })(Contact);
