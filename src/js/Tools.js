import React from "react";
import {withRouter} from "react-router-dom";
import "../css/Tools.css";

const Tools = props => (
  <div className="toolsBar">
    <button
      onClick={e => {
        props.history.goBack();
      }}
    >
      <svg className="icon">
        <use xlinkHref="#icon-left" />
      </svg>
    </button>
    <button
      onClick={e => {
        window.scroll(0, 0);
      }}
    >
      <svg className="icon">
        <use xlinkHref="#icon-up" />
      </svg>
    </button>
  </div>
);

export default withRouter(Tools);
