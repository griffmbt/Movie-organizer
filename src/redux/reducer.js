const initialState = {
  movies: [],
  title: "Новый список",
  searchLine: "",
  cart: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === "ADD_TO_LIST") {
    const item = state.movies.find(
      (item) => item.imdbID === action.payload.imdbID
    );
    return {
      ...state,
      cart: [...state.cart, { ...item }],
    };
  }

  if (action.type === "NAME_LIST") {
    return {
      ...state,
      title: action.title,
    };
  }

  if (action.type === "REMOVE_MOVIES") {
    const item = state.cart.filter(
      (item) => item.imdbID !== action.payload.imdbID
    );
    return {
      ...state,
      cart: item,
    };
  }

  if(action.type === "LOAD_MOVIES") {
    return {
        ...state,
        movies: [...action.payload.movies]
    }
  }

  return state;
}
