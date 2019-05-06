import React, {Component} from "react";
import RouterPage from "./RouterPage";
import Navbar from "./Navbar";
import Tools from "./Tools";
import "../css/app.css";

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
  render() {
    return (
      <div className="App">
        <Navbar />
        <RouterPage />
        <Tools />
      </div>
    );
  }
}

export default App;
