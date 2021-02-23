const initialState = {
  movies: [],
  searchLine: "",
  cart: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_LIST":
      const item = state.movies.find(
        (item) => item.imdbID === action.payload.imdbID
      );
      return {
        ...state,
        cart: [...state.cart, { ...item }],
      };

    case "REMOVE_MOVIES":
      const item2 = state.cart.filter(
        (item2) => item2.imdbID !== action.payload.imdbID
      );
      return {
        ...state,
        cart: item2,
      };

    case "LOAD_MOVIES":
      return {
        ...state,
        movies: [...action.payload.movies],
      };

    default:
      return state;
  }
}
