import React from "react";
import CelebrityLink from "./CelebrityLink";

const DetailsPageDescription = props => {
  let casts = props.movieDetails.casts.map((cast, index) => (
    <CelebrityLink
      name={cast.name}
      length={props.movieDetails.casts.length}
      id={cast.id}
      index={index}
      key={index}
    />
  ));

  let directors = props.movieDetails.directors.map((director, index) => (
    <CelebrityLink
      name={director.name}
      length={props.movieDetails.directors.length}
      id={director.id}
      index={index}
      key={index}
    />
  ));

  return (
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
          <span>{"导演："}</span>
          <span>{directors}</span>
        </p>
        <p>
          <span>{"主演："}</span>
          <span>{casts}</span>
        </p>
        <p>{"简介：" + props.movieDetails.summary}</p>
      </div>
    </div>
  );
};

export default DetailsPageDescription;
