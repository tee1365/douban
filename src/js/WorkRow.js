import React from "react";
import {Link} from "react-router-dom";

const WorkRow = props => {
  let row = props.array.map(v => v.subject).map(v => (
    <div key={v.id} className="WorkRow-title">
      <Link to={"/details/" + v.id}>
        <img
          src={v.images.small}
          alt=""
          className="poster"
          referrerPolicy="no-referrer"
        />
      </Link>
      <p className="text-center">{v.title}</p>
      <p className="text-center">{v.rating.average}</p>
    </div>
  ));
  return <div className="d-flex flex-wrap justify-content-between">{row}</div>;
};

export default WorkRow;
