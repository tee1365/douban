import React from "react";
import {withRouter} from "react-router-dom";

const Tools = props => (
  <div className="Tools-bar">
    <button
      onClick={e => {
        props.history.goBack();
      }}
      className="btn btn-primary"
    >
      <svg className="icon">
        <use xlinkHref="#icon-left" />
      </svg>
    </button>
    <button
      onClick={e => {
        window.scroll(0, 0);
      }}
      className="btn btn-primary"
    >
      <svg className="icon">
        <use xlinkHref="#icon-up" />
      </svg>
    </button>
  </div>
);

export default withRouter(Tools);
