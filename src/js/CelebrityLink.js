import React from "react";
import {Link} from "react-router-dom";

const CelebrityLink = props => (
  <React.Fragment>
    {props.id ? (
      <Link to={"/celebrity/" + props.id}>
        <span>{props.name}</span>
      </Link>
    ) : (
      <span>{props.name}</span>
    )}
    <span>
      {props.index + 1 !== props.length ? <span>{" / "}</span> : null}
    </span>
  </React.Fragment>
);

export default CelebrityLink;
