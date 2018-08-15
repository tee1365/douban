import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename="/douban/build/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
