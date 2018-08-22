import React from "react";
import {Link} from "react-router-dom";
import fetchJsonp from "fetch-jsonp";
import "../css/PhotoPanel.css";

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
    let start = "start=" + this.state.pageNumber * count + "&count=" + count;
    let url =
      baseUrl +
      "/v2/movie/celebrity/" +
      this.props.id +
      "/photos?" +
      start +
      "&" +
      key;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.photoList.push(...data.photos);
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
      .slice(0, 5)
      .map((value, index) => (
        <img
          src={value.cover}
          key={index}
          referrerPolicy="no-referrer"
          className="cover"
        />
      ));

    return (
      <div>
        <p className="d-flex justify-content-between mt-3">
          <span>{"影人图片"}</span>
          <span>{"查看更多"}</span>
        </p>
        <div className="d-flex justify-content-between pb-3">{shortPhotos}</div>
      </div>
    );
  }
}

export default PhotoPanel;
