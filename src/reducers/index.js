import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { pageReducer } from './pageReducer';

export const rootReducer = combineReducers({
	page: pageReducer,
	user: userReducer
});
