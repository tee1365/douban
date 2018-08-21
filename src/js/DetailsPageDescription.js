import React from "react";

const DetailsPageDescription = props => (
  <div className="row pt-5">
    <img
      className="col-xl-3 poster mx-auto mb-5"
      src={props.movieDetails.images.large}
      alt=""
    />
    <div id="description" className="col-xl-9">
      <p className="h2 mb-4">
        {props.movieDetails.title === props.movieDetails.original_title
          ? props.movieDetails.title
          : props.movieDetails.title +
            "(" +
            props.movieDetails.original_title +
            ")"}
      </p>
      <p className="h4 mb-3">
        {props.movieDetails.rating.average +
          "分(" +
          props.movieDetails.ratings_count +
          "人评价)"}
      </p>
      <p>{"上映时间：" + props.movieDetails.pubdates.join(" / ")}</p>
      <p>
        {"导演：" + props.movieDetails.directors.map(v => v.name).join(" / ")}
      </p>
      <p>{"主演：" + props.movieDetails.casts.map(v => v.name).join(" / ")}</p>
      <p>{"简介：" + props.movieDetails.summary}</p>
    </div>
  </div>
);

export default DetailsPageDescription;
