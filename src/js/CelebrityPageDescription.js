import React from "react";
import "../css/Description.css";

const CelebrityPageDescription = props => (
  <div className="border-bottom pt-4">
    <div className="row">
      <img
        className="mx-auto mb-5"
        src={props.celebrityDetails.avatars.small}
        alt=""
        referrerPolicy="no-referrer"
      />
      <div className="col-xl-8 mb-5">
        <p className="h2 mb-4">
          {props.celebrityDetails.name +
            " ( " +
            props.celebrityDetails.name_en +
            " ) "}
        </p>
        <p>{"性别：" + props.celebrityDetails.gender}</p>
        <p>{"出生日期：" + props.celebrityDetails.birthday}</p>
        <p>{"出生地：" + props.celebrityDetails.born_place}</p>
        <p>
          {"更多外文名：" +
            props.celebrityDetails.aka_en.filter(v => v !== "").join(" / ")}
        </p>
        <p>{"职业：" + props.celebrityDetails.professions.join(" / ")}</p>
      </div>
    </div>
    <div className="row px-3">
      <p>{"简介：" + props.celebrityDetails.summary}</p>
    </div>
  </div>
);

export default CelebrityPageDescription;
