import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer'
import loginReducer from './login-reducer';
import {combineReducers, createStore} from 'redux';


let rerenderEntireTree = () => {};

let reducers = combineReducers ({
    users: userReducer,
    dialogs: dialogsReducer,
    posts: profileReducer,
    login: loginReducer,
});

let store = createStore(reducers);

export default store;
