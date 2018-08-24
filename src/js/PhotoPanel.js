import React from "react";
import {Link} from "react-router-dom";
import fetchJsonp from "fetch-jsonp";
import PhotoRow from "./PhotoRow";

const count = 15;

class PhotoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
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
    let start = "";
    let url = "";
    if (this.props.type === "CELEBRITY") {
      start = "start=" + this.state.pageNumber * count + "&count=" + count;
      url =
        baseUrl +
        "/v2/movie/celebrity/" +
        this.props.id +
        "/photos?" +
        start +
        "&" +
        key;
    } else {
      start =
        "start=" +
        this.state.pageNumber * count +
        "&count=" +
        (this.state.pageNumber * count + 15);
      url =
        baseUrl +
        "/v2/movie/subject/" +
        this.props.id +
        "/photos?" +
        start +
        "&" +
        key;
    }

    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        let length = data.count / 5;
        while (length > 0) {
          stateCopy.photoList.push([...data.photos.splice(0, 5)]);
          length--;
        }
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
    let shortPhotos = this.state.photoList
      .slice(0, 1)
      .map((value, index) => <PhotoRow array={value} key={index} />);

    let allPhotos = this.state.photoList.map((value, index) => (
      <PhotoRow array={value} key={index} />
    ));

    return (
      <div className="d-flex justify-content-between mb-3 border-bottom mx-3">
        {this.state.isSecond ? (
          <div className="PhotoPanel-header">
            {this.props.type === "CELEBRITY" ? (
              <div>
                {this.props.filter === "SHORT" ? (
                  <div>
                    <p className="mt-3">
                      <span className="h3">{"影人图片"}</span>
                      <Link
                        to={"/celebrity/" + this.props.id + "/photos"}
                        className=""
                      >
                        <span className="h3 float-right">{"查看更多"}</span>
                      </Link>
                    </p>
                    <div>{shortPhotos}</div>
                  </div>
                ) : (
                  <div>
                    <p className="mt-3">
                      <span className="h3">{"影人图片"}</span>
                      <Link
                        to={"/celebrity/" + this.props.id}
                        className="float-right"
                      >
                        <span className="h3">{"返回影人主页"}</span>
                      </Link>
                    </p>
                    <div className="pb-3">{allPhotos}</div>
                    <div className="row">
                      {this.state.isAll ? (
                        <p className="mx-auto">以上为全部图片</p>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-primary mx-auto mb-4"
                          onClick={this.fetchData.bind(this)}
                        >
                          加载更多
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {this.props.filter === "SHORT" ? (
                  <div>
                    <p className="mt-3">
                      <span className="h3">{"电影剧照"}</span>
                      <Link
                        to={"/details/" + this.props.id + "/photos"}
                        className=""
                      >
                        <span className="h3 float-right">{"查看更多"}</span>
                      </Link>
                    </p>
                    <div>{shortPhotos}</div>
                  </div>
                ) : (
                  <div>
                    <p className="mt-3">
                      <span className="h3">{"电影剧照"}</span>
                      <Link
                        to={"/details/" + this.props.id}
                        className="float-right"
                      >
                        <span className="h3">{"返回电影主页"}</span>
                      </Link>
                    </p>
                    <div className="pb-3">{allPhotos}</div>
                    <div className="row">
                      {this.state.isAll ? (
                        <p className="mx-auto">以上为全部图片</p>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-primary mx-auto mb-4"
                          onClick={this.fetchData.bind(this)}
                        >
                          加载更多
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default PhotoPanel;
