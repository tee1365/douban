import React, {Component} from "react";
import fetchJsonp from "fetch-jsonp";
import "../css/HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    );
  }
}

export default HomePage;
