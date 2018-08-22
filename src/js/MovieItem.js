import React from "react";
import {Link} from "react-router-dom";
import "../css/MovieItem.css";

/*
props
  index
  movieDetails
*/

const MovieItem = props => (
  <li className="row border-bottom">
    <p className="display-4 col-md-2">{props.index + 1 + "."}</p>
    <Link to={"/details/" + props.movieDetails.id} className="col-md-3">
      <img
        className="float-md-left mx-auto my-3 image"
        alt=""
        src={props.movieDetails.images.small}
        referrerPolicy="no-referrer"
      />
    </Link>
    <div className="details col-md-7 my-3">
      <Link to={"/details/" + props.movieDetails.id}>
        <h2 className="mb-4">
          {props.movieDetails.title === props.movieDetails.original_title
            ? props.movieDetails.title
            : props.movieDetails.title +
              "(" +
              props.movieDetails.original_title +
              ")"}
        </h2>
      </Link>
      <p>
        {props.movieDetails.year +
          " / " +
          props.movieDetails.rating.average +
          " / " +
          props.movieDetails.durations.join(" / ")}
      </p>
      <p>
        {"导演: " + props.movieDetails.directors.map(v => v.name).join(" / ")}
      </p>
      <p>{"主演: " + props.movieDetails.casts.map(v => v.name).join(" / ")}</p>
      <p>{props.movieDetails.genres.join(" ")}</p>
      {props.filter === "us" ? <p>{"票房：" + props.box}</p> : null}
    </div>
  </li>
);

export default MovieItem;
