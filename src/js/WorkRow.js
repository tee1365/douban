import React from "react";

const WorkRow = props => {
  let row = props.array
    .map(v => v.subject)
    .map((v, index) => <img src={v.images.small} alt="" key={index} />);
  return <div>{row}</div>;
};

export default WorkRow;
