import React from "react";
import Comment from "./Comment";

const CommentPanel = props => {
  let comments = props.movieDetails.popular_comments.map((value, index) => (
    <Comment key={index} details={value} />
  ));

  return (
    <div className="mb-5">
      <span className="h3">
        {props.movieDetails.title}
        的短评
      </span>
      <span className="h3 float-right">查看所有短评</span>
      {comments}
    </div>
  );
};

export default CommentPanel;
