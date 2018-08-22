import React from "react";
import {Link, withRouter} from "react-router-dom";

const PhotoRow = props => {
  let row = props.array.map(v => v.cover).map((v, index) => {
    return (
      <Link to={""} key={index}>
        <img
          src={v}
          alt=""
          referrerPolicy="no-referrer"
          className="cover col-auto mx-3 mb-3"
        />
      </Link>
    );
  });
  console.log(props);
  return <div className="row">{row}</div>;
};

export default withRouter(PhotoRow);
