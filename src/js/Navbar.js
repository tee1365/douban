import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import SearchBox from "./SearchBox";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink className="nav-link" to="/top">
                Top250
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink className="nav-link" to="/us">
                US Box
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink className="nav-link" to="/weekly">
                Weekly
              </NavLink>
            </li>
          </ul>
          <SearchBox
            queryChange={this.props.queryChange.bind(this)}
            query={this.props.query}
          />
        </nav>
        <div className="Navbar-block" />
      </header>
    );
  }
}

export default Navbar;
