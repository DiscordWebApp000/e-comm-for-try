import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import productReducer from './products/productReducer';
import productDetailsReducer from './productDetails/productDetailsReducer';
import ratingsReducer from './ratings/ratingsReducer';
import userProductsReducer from './userProducts/userProductsReducer';

const rootReducer = combineReducers({
  auth: authReducer,         
  products: productReducer,    
  productDetails: productDetailsReducer, 
  userProducts: userProductsReducer,
  ratings: ratingsReducer,    

});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
