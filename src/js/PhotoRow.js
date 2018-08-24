import React from "react";

const PhotoRow = props => {
  let row = props.array.map((v, index) => {
    return (
      <img
        src={v.cover}
        alt=""
        referrerPolicy="no-referrer"
        className="PhotoRow-cover col-auto ml-3 mb-3"
        key={index}
      />
    );
  });
  return <div className="row">{row}</div>;
};

export default PhotoRow;
