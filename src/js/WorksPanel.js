import React from "react";
import {Link} from "react-router-dom";
import fetchJsonp from "fetch-jsonp";
import WorkRow from "./WorkRow";

const count = 15;

class WorksPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worksList: [],
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
      "/works?" +
      start +
      "&" +
      key;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        let length = data.count / 5;
        while (length > 0) {
          stateCopy.worksList.push([...data.works.splice(0, 5)]);
          length--;
        }
        stateCopy.pageNumber++;
        if ((this.state.pageNumber + 1) * count > data.total) {
          stateCopy.isAll = true;
        }
        stateCopy.isSecond = true;
        this.setState(stateCopy, () => {
          console.log(this.state);
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    let shortWorks = this.state.worksList
      .slice(0, 1)
      .map((value, index) => <WorkRow array={value} key={index} />);

    let allWorks = this.state.worksList.map((value, index) => (
      <WorkRow array={value} key={index} />
    ));

    return (
      <div className="border-bottom mx-3 mt-4">
        {this.state.isSecond ? (
          <div>
            {this.props.filter === "SHORT" ? (
              <div>
                <p className="mt-3">
                  <span className="h3">{"影人作品"}</span>
                  <Link to={"/celebrity/" + this.props.id + "/works"}>
                    <span className="h3 float-right">{"查看更多"}</span>
                  </Link>
                </p>
                <div>{shortWorks}</div>
              </div>
            ) : (
              <div>
                <p className="mt-3">
                  <span className="h3">{"影人作品"}</span>
                  <Link to={"/celebrity/" + this.props.id}>
                    <span className="h3 float-right">{"返回影人首页"}</span>
                  </Link>
                </p>
                <div>{allWorks}</div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default WorksPanel;
