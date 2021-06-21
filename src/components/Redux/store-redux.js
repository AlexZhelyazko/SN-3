import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer'
import {combineReducers, createStore} from 'redux';


let rerenderEntireTree = () => {};

let reducers = combineReducers ({
    users: userReducer,
    dialogs: dialogsReducer,
    posts: profileReducer,
});

let store = createStore(reducers);

export default store;
