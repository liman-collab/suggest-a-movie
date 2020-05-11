import React, { Component } from "react";
import Movie from "./Movie/Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          poster:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/950e439404c3d5eddd86ae876cec83bf_949b5045-2503-4883-bcd2-ff1f31f5b14c_240x360_crop_center.progressive.jpg?v=1573588746",
          title: "Pulp Fiction",
          director: "Quentin Tarantino",
          description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        },
        {
          poster:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4940c5878babf3dc5d2ca567b7558178_9e62fc4c-4116-48e5-a4f5-3a99c73ae7b1_240x360_crop_center.progressive.jpg?v=1573651499",
          title: "Jurassic Park",
          director: "Tjetri",
          description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        },
        {
          poster:
            "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/top_gun_maverick_ver2_240x360_crop_center.progressive.jpg?v=1578430896",
          title: "Pulp Fiction",
          director: "Quentin Tarantino",
          description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
        },
      ],
      selectedMovie: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const randomMovie = this.state.movies[Math.floor(Math.random() * 3)];
    this.setState({
      selectedMovie: randomMovie,
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h2>Ju sugjerojme filmin ne vijim</h2>
        <Movie
          posterImage={this.state.selectedMovie.poster}
          title={this.state.selectedMovie.title}
          director={this.state.selectedMovie.director}
          description={this.state.selectedMovie.description}
        />
        <button onClick={this.handleClick}>
          Press this button to change the movie
        </button>
      </div>
    );
  }
}

export default App;
