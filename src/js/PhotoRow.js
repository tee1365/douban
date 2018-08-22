import React from "react";

const PhotoRow = props => {
  let row = props.array.map(v => v.cover).map((v, index) => {
    return (
      <img
        src={v}
        key={index}
        alt=""
        referrerPolicy="no-referrer"
        className="cover col-auto mx-3 mb-3"
      />
    );
  });

  return <div className="row">{row}</div>;
};

export default PhotoRow;
