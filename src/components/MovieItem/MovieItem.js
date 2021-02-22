import React, { Component } from "react";
import "./MovieItem.css";

import { connect } from "react-redux";

class MovieItem extends Component {
  render() {
    const { Title, Year, Poster, addItemToCart, imdbID } = this.props;
    return (
      <article className="movie-item" key={imdbID}>
        <img className="movie-item__poster" src={Poster} alt={Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          <button
            onClick={() => addItemToCart(imdbID)}
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

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (imdbID) => {
    const action = {
      type: "ADD_TO_LIST",
      payload: {
        imdbID: imdbID,
      },
    };

    dispatch(action);
  },
});

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
