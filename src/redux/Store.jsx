import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;
