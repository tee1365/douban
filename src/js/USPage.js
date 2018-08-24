import React, {Component} from "react";
import MovieItem from "./MovieItem";
import WaitingPage from "./WaitingPage";
import fetchJsonp from "fetch-jsonp";

class USPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieArray: [],
      date: "",
      isSecond: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let baseUrl = "https://api.douban.com";
    let apikey = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    let url = baseUrl + "/v2/movie/us_box?" + apikey;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        let details = data.subjects;
        let date = data.date;
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.movieArray.push(...details);
        // stateCopy.date = date.substring(0, date.indexOf("-")).trim();
        stateCopy.date = date;
        stateCopy.isSecond = true;
        this.setState(stateCopy);
      });
  }

  render() {
    let list = this.state.movieArray.map((value, index) => (
      <MovieItem
        key={value.subject.id}
        index={index}
        movieDetails={value.subject}
        filter="us"
        box={"$ " + value.box.toLocaleString()}
      />
    ));
    return (
      <div className="container">
        {this.state.isSecond ? (
          <React.Fragment>
            <p className="display-4 text-center py-5">
              北美周末票房榜(
              {this.state.date})
            </p>
            <ul>{list}</ul>
          </React.Fragment>
        ) : (
          <WaitingPage />
        )}
      </div>
    );
  }
}

export default USPage;
