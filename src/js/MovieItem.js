import React from "react";
import "../css/MovieItem.css";

const MovieItem = props => (
  <li className="row border-bottom">
    <img
      className="float-md-left mx-auto my-3 image"
      alt=""
      src={props.movieDetails.images.small}
    />
    <div className="details col-md-9 my-3">
      <h2>
        {props.movieDetails.title === props.movieDetails.original_title
          ? props.movieDetails.title
          : props.movieDetails.title +
            "(" +
            props.movieDetails.original_title +
            ")"}
      </h2>
      <p>{props.movieDetails.year + "/" + props.movieDetails.rating.average}</p>
      <p>
        {"导演: " + props.movieDetails.directors.map(v => v.name).join(" ")}
      </p>
      <p>{"主演: " + props.movieDetails.casts.map(v => v.name).join(" ")}</p>
      <p>{props.movieDetails.genres.join(" ")}</p>
    </div>
  </li>
);

export default MovieItem;
