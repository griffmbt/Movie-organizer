import React, { Component } from "react";
import "./Favorites.css";

import { connect } from "react-redux";

class Favorites extends Component {
  state = {
    title: "Новый список",
  };

  handleChangeFavorites = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    const { cart, saveListFavorites } = this.props;
    const { title } = this.state;
    return (
      <div className="favorites">
        <input
          value={title}
          className="favorites__name"
          onChange={(event) => this.handleChangeFavorites(event)}
        />
        <ul className="favorites__list">
          {cart.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.title} ({item.year})
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => saveListFavorites(title)}
          type="button"
          className="favorites__save"
        >
          Сохранить список
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveListFavorites: (title) => {
    const action = {
      type: "НАЗВАНИЕ СПИСКА",
      title: title
    };
    dispatch(action);
  },
});
const mapStateToProps = (state) => ({ cart: state.cart });

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
