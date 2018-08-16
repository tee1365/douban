import React, {Component} from "react";
import MovieItem from "./MovieItem";
import WaitingPage from "./WaitingPage";
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
      isAll: false,
      isSecond: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let baseUrl = "https://api.douban.com";
    let start = "?start=" + this.state.pageNumber * count + "&count=" + count;
    let apikey = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    let url = baseUrl + "/v2/movie/top250" + start + "&" + apikey;
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
        stateCopy.isSecond = true;
        this.setState(stateCopy);
      });
  }

  render() {
    let list = this.state.movieArray.map((detail, index) => (
      <MovieItem key={index} index={index} movieDetails={detail} filter="top" />
    ));
    return (
      <div className="container">
        {this.state.isSecond ? (
          <div>
            <p className="display-4 text-center my-5">豆瓣TOP250榜单</p>
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
        ) : (
          <WaitingPage />
        )}
      </div>
    );
  }
}

export default Top250Page;
