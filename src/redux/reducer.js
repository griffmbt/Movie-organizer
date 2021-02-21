const initialState = {
  movies: [],
};

export default function reducer(state = initialState, action) {
  // if (action.type === "ДОБАВИТЬ ТОВАР В КОРЗИНУ") {
  //   // state.cartGoods;
  //   const item = state.goods.find((item) => item.id === action.payload.id);
  //   return {
  //     ...state,
  //     cartGoods: [...state.cartGoods, { ...item }],
  //   };
  // }

  // if (action.type === "УДАЛИТЬ ТОВАР ИЗ КОРЗИНЫ") {
  //   const item = state.cartGoods.filter(
  //     (item) => item.id !== action.payload.id
  //   );
  //   return {
  //       ...state,
  //       cartGoods: item ,
  //   };
  // }

  return state;
}
