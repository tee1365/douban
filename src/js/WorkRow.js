import React from "react";

const WorkRow = props => {
  let row = props.array.map(v => v.subject).map((v, index) => (
    <div>
      <img src={v.images.small} alt="" key={index} className="poster" />
      <p className="text-center">{v.title}</p>
      <p className="text-center">{v.rating.average}</p>
    </div>
  ));
  return <div className="d-flex flex-wrap justify-content-between">{row}</div>;
};

export default WorkRow;