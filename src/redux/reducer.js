const initialState = {
  movies: [
    {
      imdbID: "tt3896198",
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0068646",
      title: "The Godfather",
      year: 1972,
      poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
  ],
  title: '',
  searchLine: '',
  cart: []
};

export default function reducer(state = initialState, action) {
  if (action.type === "ДОБАВИТЬ В КОРЗИНУ") {
    
    // state.cartGoods;
    const item = state.movies.find((item) => item.imdbID === action.payload.imdbID);
    console.log(item)
    return {
      ...state,
      cart: [...state.cart, { ...item }],
    };
  }
  
  if (action.type === "НАЗВАНИЕ СПИСКА") {
    console.log(action.title)
    return {
      ...state,
      title: action.title
    }
    
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

  return state;
}
