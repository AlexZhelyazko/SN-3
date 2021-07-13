import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import userReducer from './user-reducer'
import loginReducer from './login-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers ({
    users: userReducer,
    dialogs: dialogsReducer,
    posts: profileReducer,
    login: loginReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
