import React from "react";
import {Link} from "react-router-dom";

const CelebrityLink = props => (
  <span>
    <Link to={"/celebrity/" + props.id}>
      <span>{props.name}</span>
    </Link>
    <span>
      {props.index + 1 !== props.length ? <span>{" / "}</span> : null}
    </span>
  </span>
);

export default CelebrityLink;
