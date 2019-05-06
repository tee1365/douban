import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import SearchBox from "./SearchBox";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  queryChange = (e) => {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.query = e.target.value;
    this.setState(stateCopy);
  }

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
            queryChange={this.queryChange}
            query={this.state.query}
          />
        </nav>
        <div className="Navbar-block" />
      </header>
    );
  }
}

export default Navbar;
