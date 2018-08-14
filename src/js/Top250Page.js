import React, {Component} from "react";
import MovieItem from "./MovieItem";
import fetchJsonp from "fetch-jsonp";

/*
movie-data
  rating--number
  title--string
  image--url--string
  date--number
  genre--array--string
  director--array--string
  stars--array--string
pageNumber

*/

const count = 10;

class Top250Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      movieArray: [],
      isAll: false
    };
    this.fetchData();
  }

  fetchData() {
    let baseUrl = "https://api.douban.com";
    let start = "?start=" + this.state.pageNumber * count + "&count=" + count;
    let url = baseUrl + "/v2/movie/top250" + start;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        let total = data.total;
        let details = data.subjects;
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.movieArray.push(...details);
        stateCopy.pageNumber++;
        if ((this.state.pageNumber + 1) * count > total) {
          stateCopy.isAll = true;
        }
        this.setState(stateCopy);
      });
  }

  render() {
    let list = this.state.movieArray.map((detail, index) => (
      <MovieItem key={index} movieDetails={detail} />
    ));
    return (
      <div className="container">
        <ul>{list}</ul>
        <div className="row">
          {this.state.isAll ? (
            <p className="mx-auto">以上为全部搜索结果</p>
          ) : (
            <button
              type="button"
              className="btn btn-primary mb-4 mx-auto"
              onClick={this.fetchData.bind(this)}
            >
              加载更多
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Top250Page;
