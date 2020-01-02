import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case 5:
        // TODO: this should be changed (5-->null) once auth is implemented
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        // they must be logged in.
        return [
          <li key="1">Payments function</li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: FILL ME IN
          </li>, // 0 pixels on top, 10px on left and right hand sides
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    const {
      homeActive,
      pricesActive,
      contactActive,
      aboutActive,
      detailsActive,
      resourcesActive
    } = this.props.activePageObject;
    return (
      <div className="ui pointing menu">
        <Link className={homeActive} to="/">
          Home
        </Link>
        <Link className={pricesActive} to="/prices">
          Prices
        </Link>
        <Link className={contactActive} to="/contact">
          Contact
        </Link>
        <Link className={aboutActive} to="/about">
          About Us
        </Link>
        <Link className={detailsActive} to="/details">
          Details
        </Link>
        <Link className={resourcesActive} to="/resources">
          Resources
        </Link>
        <div className="right menu">
          <ul>{this.renderContent()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ activePageObject }) {
  return { activePageObject };
}

export default connect(mapStateToProps, actions)(Header);
