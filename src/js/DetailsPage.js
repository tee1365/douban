import React, {Component} from "react";
import fetchJsonp from "fetch-jsonp";
import DetailsPageDescription from "./DetailsPageDescription";
import WaitingPage from "./WaitingPage";
import CommentPanel from "./CommentPanel";
import ReviewPanel from "./ReviewPanel";
import "../css/DetailsPage.css";

/*
title
rating
director
casts
genre
date
summary
photos*5
  <AllPhotos>
comments*3
  <AllComments>
reviews*3
  <AllReviews>
*/

// props => id

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecond: false,
      movieDetails: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let baseUrl = "https://api.douban.com";
    let key = "apikey=0df993c66c0c636e29ecbb5344252a4a";
    let id = window.location.search.replace(/\D+/g, "");
    let url = baseUrl + "/v2/movie/subject/" + id + "?" + key;
    fetchJsonp(url)
      .then(response => response.json())
      .then(data => {
        this.setState({movieDetails: data, isSecond: true});
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="container">
        {this.state.isSecond ? (
          <div>
            <div className="row pt-5">
              <img
                className="col-xl-3 poster mx-auto mb-5"
                src={this.state.movieDetails.images.large}
                alt=""
              />
              <DetailsPageDescription movieDetails={this.state.movieDetails} />
            </div>
            <CommentPanel movieDetails={this.state.movieDetails} />
            <ReviewPanel movieDetails={this.state.movieDetails} />
          </div>
        ) : (
          <WaitingPage />
        )}
      </div>
    );
  }
}

export default DetailsPage;
