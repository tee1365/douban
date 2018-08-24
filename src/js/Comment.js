import React from "react";

const Comment = props => (
  <div className="my-5 border-bottom">
    <div className="row Comment-header">
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
        {"有用数 " + props.details.useful_count}
      </span>
    </div>
    <p className="lead my-3">{props.details.content}</p>
  </div>
);

export default Comment;
