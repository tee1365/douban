import React, {Component} from "react";
import MovieItem from "./MovieItem";
import fetchJsonp from "fetch-jsonp";

class WeeklyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieArray: []
    };
    this.fetchData();
  }

  fetchData() {
    let key = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    let baseUrl = "https://api.douban.com";
    let url = baseUrl + "/v2/movie/weekly?" + key;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        let details = data.subjects;
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.movieArray.push(...details);
        this.setState(stateCopy);
      });
  }

  render() {
    let list = this.state.movieArray
      .map(v => v.subject)
      .map((detail, index) => <MovieItem key={index} movieDetails={detail} />);
    return (
      <div className="container">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default WeeklyPage;
