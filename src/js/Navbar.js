import React, {Component} from "react";
import {Link} from "react-router-dom";
import SearchBox from "./SearchBox";
import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/top">
                Top250
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/us">
                US Box
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/weekly">
                Weekly
              </Link>
            </li>
          </ul>
          <SearchBox
            queryChange={this.props.queryChange.bind(this)}
            searchMovie={this.props.searchMovie.bind(this)}
            query={this.props.query}
          />
        </nav>
        <div className="block" />
      </header>
    );
  }
}

export default Navbar;
