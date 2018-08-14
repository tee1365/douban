import React from "react";
import {Link} from "react-router-dom";

const SearchBox = props => {
  let queryUrl = "/search?q=" + props.query;

  return (
    <div className="content">
      <div className="input-group my-auto">
        <input
          type="text"
          className="form-control"
          placeholder="搜索你喜欢的电影"
          onChange={e => {
            props.queryChange(e);
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={props.searchMovie.bind(this)}
          >
            <Link className="queryButton" to={queryUrl}>search</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
