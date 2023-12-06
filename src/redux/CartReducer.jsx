const initialState = {
  cartItems: [], // Initialize cart items as an empty array
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload.id,
        ),
      };
    // Add more cases for different cart actions as needed
    default:
      return state;
  }
};

export default cartReducer;
