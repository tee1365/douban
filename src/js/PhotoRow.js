import React from "react";

const PhotoRow = props => {
  let row = props.array.map(v => {
    return (
      <img
        src={v.cover}
        alt=""
        referrerPolicy="no-referrer"
        className="PhotoRow-cover col-auto ml-3 mb-3"
        key={v.id}
      />
    );
  });
  return <div className="row">{row}</div>;
};

export default PhotoRow;
