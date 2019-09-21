import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import usersReducer from './users-reducer.js';

let reducers = combineReducers({
	profilePage: profileReducer, 
	dialogsPage: dialogsReducer, 
	sidebar: sidebarReducer,
	usersPage: usersReducer
});

let store = createStore(reducers, window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;