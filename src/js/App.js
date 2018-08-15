import React, {Component} from "react";
import RouterPage from "./RouterPage";
import Navbar from "./Navbar";

/*
APP
  Navbar
    SearchBox
  RouterPage
    HomePage
    Top250Page
      MovieItem
    USPage
      MovieItem
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  queryChange(e) {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.query = e.target.value;
    this.setState(stateCopy);
  }

  searchMovie() {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <Navbar
          queryChange={this.queryChange.bind(this)}
          searchMovie={this.searchMovie.bind(this)}
          query={this.state.query}
        />
        <RouterPage />
      </div>
    );
  }
}

export default App;
