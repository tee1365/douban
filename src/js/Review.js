import React from "react";

const Review = props => (
  <div className="py-5 border-bottom">
    <div className="row description">
      <img
        src={props.details.author.avatar}
        alt=""
        className="rounded-circle ml-4"
      />
      <span className="col-sm-3 align-self-center">
        {props.details.author.name}
      </span>
      <span className="col-sm-2 align-self-center">
        {"评分  " + props.details.rating.value * 2}
      </span>
      <span className="col-sm-auto align-self-center">
        {props.details.title}
      </span>
    </div>
    <p className="lead my-3">{props.details.summary}</p>
  </div>
);

export default Review;
