import React from "react";
import Review from "./Review";

const ReviewPanel = props => {
  let reviews = props.movieDetails.popular_reviews.map((value, index) => (
    <Review key={index} details={value} />
  ));

  return (
    <div>
      <p className="h3">
        {props.movieDetails.title}
        的影评
      </p>
      <span className="h3 float-right">查看所有影评</span>
      {reviews}
    </div>
  );
};

export default ReviewPanel;
