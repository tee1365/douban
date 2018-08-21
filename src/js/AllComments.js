import React from "react";
import CommentPanel from "./CommentPanel";

const AllComments = props => {
  return (
    <div>
      <CommentPanel movieDetails={props.movieDetails} filter={"ALL"} />
    </div>
  );
};

export default AllComments;
