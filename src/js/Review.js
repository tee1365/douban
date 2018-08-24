import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnfolded: false
    };
  }

  unfold() {
    this.setState({isUnfolded: true});
  }

  fold() {
    this.setState({isUnfolded: false});
  }

  render() {
    return (
      <div className="my-5 border-bottom">
        <div className="row Review-header">
          <img
            src={this.props.details.author.avatar}
            alt=""
            className="rounded-circle ml-4"
          />
          <span className="col-sm-3 align-self-center">
            {this.props.details.author.name}
          </span>
          <span className="col-sm-2 align-self-center">
            {"评分  " + this.props.details.rating.value * 2}
          </span>
          <span className="col-sm-auto align-self-center">
            {this.props.details.title}
          </span>
        </div>
        {!this.state.isUnfolded ? (
          <p id="summary" className="lead my-3">
            {this.props.details.summary}
            <span
              onClick={this.unfold.bind(this)}
              className="Review-foldAndUnfold"
            >
              （展开）
            </span>
          </p>
        ) : (
          <p id="content" className="lead my-3">
            {this.props.details.content}
            <span
              onClick={this.fold.bind(this)}
              className="Review-foldAndUnfold"
            >
              （收起）
            </span>
          </p>
        )}
      </div>
    );
  }
}

export default Review;
