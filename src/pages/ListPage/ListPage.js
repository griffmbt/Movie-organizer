import React, { Component } from "react";
import "./ListPage.css";
import Header from "../../components/Header/Header";

import { connect } from "react-redux";

class ListPage extends Component {
  state = {
    renderList: [],
    listAlgoritmika: {},
  };

  componentDidMount() {
    this.loadListAlgoritmika();
  }

  loadListAlgoritmika = async () => {
    const id = this.props.match.params;
    const responseAlgoritmika = await fetch(
      `https://acb-api.algoritmika.org/api/movies/list/${id.id}`
    );
    const listAlgoritmika = await responseAlgoritmika.json();
    this.setState({ listAlgoritmika: listAlgoritmika }, () =>
      this.loadListMovies()
    );
  };

  loadListMovies = () => {
    this.state.listAlgoritmika.movies.forEach(async (movie) => {
      const responseImdb = await fetch(
        `http://www.omdbapi.com/?i=` + movie + `&apikey=af77a42c`
      );
      const listImdb = await responseImdb.json();
      this.setState(() => ({
        renderList: [...this.state.renderList, listImdb],
      }));
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="list-page">
          <h1 className="list-page__title">{this.state.listAlgoritmika.title}</h1>
          <ul>
            {this.state.renderList.map((item) => {
              return (
                <article className="movie-item" key={item.imdbID}>
                  <img
                    className="movie-item__poster"
                    src={item.Poster}
                    alt={item.Title}
                  />
                  <div className="movie-item__info">
                    <a
                      href={"https://www.imdb.com/title/" + item.imdbID}
                      target="_blank"
                    >
                      {item.Title} ({item.Year})
                    </a>
                    <p className="movie-item__director">
                      Director: {item.Director}
                    </p>
                    <p className="movie-item__imdbRating">
                      IMDb: {item.imdbRating}
                    </p>
                  </div>
                </article>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.title,
});

export default connect(mapStateToProps)(ListPage);
