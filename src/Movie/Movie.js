import React, { Component } from "react";
import "./Movie.css";
class Movie extends Component {
  render() {
    return (
      <div className="moviePoster">
        <img src={this.props.posterImage} />
        <h1>{this.props.title}</h1>
        <h2>{this.props.director && `Director :${this.props.director}`}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
export default Movie;
