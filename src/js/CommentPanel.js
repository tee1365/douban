import React, {Component} from "react";
import {Link} from "react-router-dom";
import fetchJsonp from "fetch-jsonp";
import Comment from "./Comment";

const count = 10;

class CommentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
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
      baseUrl + "/v2/movie/subject/" + id + "/comments?" + start + "&" + key;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.commentList.push(...data.comments);
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
    let popularComments = this.props.movieDetails.popular_comments.map(
      (value, index) => <Comment key={index} details={value} />
    );

    let allComments = this.state.commentList.map((value, index) => (
      <Comment key={index} details={value} />
    ));

    return (
      <div className="pb-5">
        {this.props.filter === "SHORT" ? (
          <div>
            <span className="h3">
              {this.props.movieDetails.title}
              的短评
            </span>
            <Link to={"/details/" + this.props.movieDetails.id + "/comments"}>
              <span className="h3 float-right">查看所有短评</span>
            </Link>
            {popularComments}
          </div>
        ) : (
          <div>
            <span className="h3">
              {this.props.movieDetails.title}
              的短评
            </span>
            <Link to={"/details/" + this.props.movieDetails.id}>
              <span className="h3 float-right">返回电影主页</span>
            </Link>
            {allComments}
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
          </div>
        )}
      </div>
    );
  }
}

export default CommentPanel;
