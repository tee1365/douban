import React, {Component} from "react";
import fetchJsonp from "fetch-jsonp";
import DetailsPageDescription from "./DetailsPageDescription";
import WaitingPage from "./WaitingPage";
import CommentPanel from "./CommentPanel";
import ReviewPanel from "./ReviewPanel";
import PhotoPanel from "./PhotoPanel";
import {Switch, Route} from "react-router-dom";
import "../css/Description.css";

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
    let id = this.props.match.params.query;
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
            <DetailsPageDescription movieDetails={this.state.movieDetails} />
            <Switch>
              <Route
                path={this.props.match.path}
                exact
                render={() => (
                  <div>
                    <PhotoPanel
                      id={this.state.movieDetails.id}
                      filter={"SHORT"}
                    />
                    <CommentPanel
                      movieDetails={this.state.movieDetails}
                      filter={"SHORT"}
                    />
                    <ReviewPanel
                      movieDetails={this.state.movieDetails}
                      filter={"SHORT"}
                      type="MOVIE"
                    />
                  </div>
                )}
              />
              <Route
                path={this.props.match.path + "/comments"}
                render={() => (
                  <CommentPanel
                    movieDetails={this.state.movieDetails}
                    filter={"ALL"}
                  />
                )}
              />
              <Route
                path={this.props.match.path + "/reviews"}
                render={() => (
                  <ReviewPanel
                    movieDetails={this.state.movieDetails}
                    filter={"ALL"}
                  />
                )}
              />
              <Route
                path={this.props.match.path + "/photos"}
                render={() => (
                  <PhotoPanel
                    id={this.state.movieDetails.id}
                    filter={"ALL"}
                    type="MOVIE"
                  />
                )}
              />
            </Switch>
          </div>
        ) : (
          <WaitingPage />
        )}
      </div>
    );
  }
}

export default DetailsPage;
