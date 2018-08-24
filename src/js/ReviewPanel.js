import React, {Component} from "react";
import {Link} from "react-router-dom";
import fetchJsonp from "fetch-jsonp";
import Review from "./Review";

const count = 10;

class ReviewPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      pageNumber: 0,
      isAll: false,
      isSecond: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let baseUrl = "https://api.douban.com";
    let key = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    let id = this.props.movieDetails.id;
    let start = "start=" + this.state.pageNumber * count + "&count=" + count;
    let url =
      baseUrl + "/v2/movie/subject/" + id + "/reviews?" + start + "&" + key;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.reviewList.push(...data.reviews);
        stateCopy.pageNumber++;
        if ((this.state.pageNumber + 1) * count > data.total) {
          stateCopy.isAll = true;
        }
        stateCopy.isSecond = true;
        this.setState(stateCopy);
      })
      .catch(e => console.error(e));
  }

  render() {
    let popularReviews = this.state.reviewList
      .slice(0, 4)
      .map(value => <Review key={value.id} details={value} />);

    let allReviews = this.state.reviewList.map(value => (
      <Review key={value.id} details={value} />
    ));

    return (
      <div className="pb-5 mx-3">
        {this.props.filter === "SHORT" ? (
          <React.Fragment>
            <span className="h3">
              {this.props.movieDetails.title}
              的影评
            </span>
            <Link to={"/details/" + this.props.movieDetails.id + "/reviews"}>
              <span className="h3 float-right">查看所有影评</span>
            </Link>
            {popularReviews}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="h3">
              {this.props.movieDetails.title}
              的影评
            </span>
            <Link to={"/details/" + this.props.movieDetails.id}>
              <span className="h3 float-right">返回电影主页</span>
            </Link>
            {allReviews}
            {this.state.isSecond ? (
              <div className="row">
                {this.state.isAll ? (
                  <p className="mx-auto">以上为全部搜索结果</p>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary mx-auto"
                    onClick={this.fetchData.bind(this)}
                  >
                    加载更多
                  </button>
                )}
              </div>
            ) : null}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ReviewPanel;
