import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducer/categoriesReducer';
import { productsReducer } from './reducer/productsReducer';
import { shoppingCartReducer } from './reducer/shoppingCartReducer';
import { discountReducer } from './reducer/discountReducer';
import { productReducer } from './reducer/productReducer';



export const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  discount: discountReducer,
  product: productReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))