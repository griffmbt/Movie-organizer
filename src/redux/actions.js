const LOAD_MOVIES = "LOAD_MOVIES";
const NAME_LIST = "NAME_LIST";
const REMOVE_MOVIES = "REMOVE_MOVIES";

export function fetchLoadMovies(movies) {
  return {
    type: "LOAD_MOVIES",
    payload: {
      movies: movies,
    },
  };
}

// export function saveListFavorites(title) {
//     return {
//       type: "NAME_LIST",
//       title: title,
//     };
// }

// export function removeItemToCart(imdbID) {
//     return {
//       type: "REMOVE_MOVIES",
//       payload: {
//         imdbID: imdbID,
//       },
//     };
//   }
