import React, { Component } from "react";
import "./MovieItem.css";

import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions"

class MovieItem extends Component {
  render() {
    const { Title, Year, Poster, imdbID } = this.props;
    return (
      <article className="movie-item" key={imdbID}>
        <img className="movie-item__poster" src={Poster} alt={Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          <button
            onClick={() => this.props.dispatch(addItemToCart(imdbID))}
            type="button"
            className="movie-item__add-button"
            disabled={this.props.cart.find(item => item.imdbID === imdbID)}
          >
            Добавить в список
          </button>
        </div>
      </article>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(MovieItem);
