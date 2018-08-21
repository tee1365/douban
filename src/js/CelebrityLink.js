import React from "react";
import {Link} from "react-router-dom";

const CelebrityLink = props => (
  <Link>
    {props.index + 1 !== props.length ? (
      <span>{props.name + " / "}</span>
    ) : (
      <span>{props.name}</span>
    )}
  </Link>
);

export default CelebrityLink;
