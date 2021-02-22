import React, { Component } from "react";
import "./Favorites.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Favorites extends Component {
  state = {
    title: "Новый список",
    isDisabled: false,
  };

  handleChangeFavorites = (event) => {
    this.setState({ title: event.target.value });
  };
  clickDisabled = () => {
    this.setState({ isDisabled: true });
  };

  render() {
    const { cart, saveListFavorites, removeItemToCart, imdbID } = this.props;
    const { title, isDisabled } = this.state;
    return (
      <div className="favorites">
        <input
          disabled={isDisabled}
          value={title}
          className="favorites__name"
          onChange={(event) => this.handleChangeFavorites(event)}
        />
        <ul className="favorites__list">
          {cart.map((item) => {
            return (
              <li key={item.imdbID}>
                <button className="favorites__list__delete" onClick={() => removeItemToCart(item.imdbID)}>x</button>
                {item.Title} ({item.Year})
                
              </li>
            );
          })}
        </ul>
        {isDisabled ? (
          <Link to="/list/:id">посмотреть мой список</Link>
        ) : (
          <button
            onClick={() => (saveListFavorites(title), this.clickDisabled())}
            type="button"
            className="favorites__save"
          >
            Сохранить список
          </button>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveListFavorites: (title) => {
    const action = {
      type: "NAME_LIST",
      title: title,
    };
    dispatch(action);
  },

  removeItemToCart: (imdbID) => {
    const action = {
      type: "REMOVE_MOVIES",
      payload: {
        imdbID: imdbID,
      },
    };
    dispatch(action);
  },
});

const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
