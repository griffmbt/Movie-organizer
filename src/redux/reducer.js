const initialState = {
  movies: [],
  title: "Новый список",
  searchLine: "",
  cart: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === "ДОБАВИТЬ В КОРЗИНУ") {
    const item = state.movies.find(
      (item) => item.imdbID === action.payload.imdbID
    );
    return {
      ...state,
      cart: [...state.cart, { ...item }],
    };
  }

  if (action.type === "НАЗВАНИЕ СПИСКА") {
    console.log(action.title);
    return {
      ...state,
      title: action.title,
    };
  }

  if (action.type === "УДАЛИТЬ ИЗ КОРЗИНЫ") {
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
