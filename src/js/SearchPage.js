import React, {Component} from "react";
import MovieItem from "./MovieItem";
import fetchJsonp from "fetch-jsonp";

const count = 10;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 0,
      movieArray: [],
      isAll: false,
      query: this.props.match.params.query,
      isSecond: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let baseUrl = "https://api.douban.com";
    let key = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    let start = "&start=" + this.state.pageNumber * count + "&count=" + count;
    let url =
      baseUrl + "/v2/movie/search?q=" + this.state.query + start + "&" + key;
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

  componentWillReceiveProps(nextProps) {
    //通过检测react-router的历史判断url是否改变
    if (this.props.match.params.query !== nextProps.match.params.query) {
      let stateCopy = JSON.parse(JSON.stringify(this.state));
      stateCopy.query = nextProps.match.params.query;
      stateCopy.pageNumber = 0;
      stateCopy.movieArray = [];
      stateCopy.isSecond = false;
      this.setState(stateCopy, () => {
        //this.setState是异步操作，不会立即更新，如果想更新完毕后执行可以写在后面的回调函数里
        this.fetchData();
      });
    }
  }

  render() {
    let list = this.state.movieArray.map((detail, index) => (
      <MovieItem key={index} index={index} movieDetails={detail} />
    ));
    return (
      <div className="container">
        {this.state.isSecond ? (
          <div>
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
        ) : null}
      </div>
    );
  }
}

export default SearchPage;
