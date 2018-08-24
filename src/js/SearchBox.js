import React from "react";
import {Link} from "react-router-dom";

const SearchBox = props => {
  let queryUrl = "/movie/" + props.query;

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
          <Link to={queryUrl}>
            <button className="btn btn-secondary" type="button">
              search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
