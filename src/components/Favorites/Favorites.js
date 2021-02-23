import React, { Component } from "react";
import "./Favorites.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Favorites extends Component {
  state = {
    title: "Новый список",
    isDisabled: false,
    linkId: ""
  };

  postListAlgoritmika = async () => {
    const response = await fetch("https://acb-api.algoritmika.org/api/movies/list", 
    {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        "title": this.state.title,
        "movies": this.props.cart.map(item => item.imdbID)
      })
    })
    const data = await response.json()
    this.setState({linkId: data.id})
  }

  handleChangeFavorites = (event) => {
    this.setState({ title: event.target.value });
  };
  
  clickDisabled = () => {
    this.postListAlgoritmika()
    this.setState({ isDisabled: true });
  };

  render() {
    const { cart, removeItemToCart } = this.props;
    const { title, isDisabled, linkId } = this.state;
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
          <Link to={`/list/${linkId}`} target="_blank">посмотреть мой список</Link>
        ) : (
          <button
            onClick={() => this.clickDisabled()}
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

const mapStateToProps = (state) => ({ cart: state.cart});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
