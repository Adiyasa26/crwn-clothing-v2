import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';

export const rootReducers = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
