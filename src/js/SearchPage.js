import React, {Component} from "react";
import MovieItem from "./MovieItem";
import WaitingPage from "./WaitingPage";
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
        this.fetchData();
      });
    }
  }

  render() {
    let list = this.state.movieArray.map((detail, index) => (
      <MovieItem key={detail.id} index={index} movieDetails={detail} />
    ));
    return (
      <div className="container">
        {this.state.isSecond ? (
          <React.Fragment>
            <ul>{list}</ul>
            <div className="row">
              {this.state.isAll ? (
                <p className="mx-auto">以上为全部搜索结果</p>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary my-4 mx-auto"
                  onClick={this.fetchData.bind(this)}
                >
                  加载更多
                </button>
              )}
            </div>
          </React.Fragment>
        ) : (
          <WaitingPage />
        )}
      </div>
    );
  }
}

export default SearchPage;
