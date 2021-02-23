const LOAD_MOVIES = "LOAD_MOVIES";
const REMOVE_MOVIES = "REMOVE_MOVIES";
const ADD_TO_LIST = "ADD_TO_LIST";

export function fetchLoadMovies(movies) {
  return {
    type: "LOAD_MOVIES",
    payload: {
      movies: movies,
    },
  };
}

export function removeItemToCart(imdbID) {
  return {
    type: "REMOVE_MOVIES",
    payload: {
      imdbID: imdbID,
    },
  };
}

export function addItemToCart(imdbID) {
  return {
    type: "ADD_TO_LIST",
    payload: {
      imdbID: imdbID,
    },
  };
}
