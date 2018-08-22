import React from "react";
import fetchJsonp from "fetch-jsonp";
import WaitingPage from "./WaitingPage";
import CelebrityPageDescription from "./CelebrityPageDescription";

class CelebrityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecond: false,
      celebrityDetails: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let baseUrl = "https://api.douban.com";
    let key = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    let id = this.props.match.params.query;
    let url = baseUrl + "/v2/movie/celebrity/" + id + "?" + key;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        this.setState({celebrityDetails: data, isSecond: true});
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="container">
        {this.state.isSecond ? (
          <CelebrityPageDescription
            celebrityDetails={this.state.celebrityDetails}
          />
        ) : (
          <WaitingPage />
        )}
      </div>
    );
  }
}

export default CelebrityPage;
