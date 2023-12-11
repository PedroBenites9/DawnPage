export const types = {
  ADD_PRODUCT: "cart/ADD_PRODUCT",
  SET_PRODUCTS: "cart/SET_PRODUCTS",
};

const INITIAL_STATE = {
  fetching: false,
  cart: [],
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case types.GET_GAME_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case types.ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    case types.SET_PRODUCTS:
      return {
        ...state,
        cart: action.products,
      };
    default:
      return state;
  }
};

export const actions = {
  addProducts: (products) => ({
    type: types.SET_PRODUCTS,
    products,
  }),
  setProducts: (products) => ({
    type: types.SET_PRODUCTS,
    products,
  }),
};

export const selectors = {
  getFetching: ({ home }) => home.fetching,
  getCart: ({ cart }) => cart.cart,
  getCartCount: ({ cart }) => cart.cart.length,
};
