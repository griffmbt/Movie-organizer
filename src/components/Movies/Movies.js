import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

import { connect } from "react-redux";

class Movies extends Component {
  
  render() {
    console.log(this.props.cart)
    return (
      <ul className="movies">
        {this.props.movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem {...movie}  />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    cart: state.cart
});

export default connect(mapStateToProps)(Movies);
