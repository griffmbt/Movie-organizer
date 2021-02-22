export function fetchLoadMovies(movies) {
  return {
    type: "LOAD_MOVIES",
    payload: {
      movies: movies,
    },
  };
}

