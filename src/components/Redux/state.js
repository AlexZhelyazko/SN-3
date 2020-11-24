import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import {combineReducers, createStore} from 'redux';


let renderElem = () => {};


let store = {
    _state: {
        posts: {
            txt: [
                { text: 'Hello', id: '1' },
                { text: 'World', id: '1' },
                { text: '!!!', id: '1' },
            ],
            newPostText: '',
        },

        dialogs: {
            dialogsItems: [
                { name: 'Alex', id: 1 },
                { name: 'Dmitriy', id: 2 },
                { name: 'Artemiy', id: 3 },
                { name: 'Vladilen', id: 4 },
            ],

            messageItems: [
                { message: 'Hello', id: 1 },
                { message: 'World', id: 2 },
                { message: 'Yo', id: 3 },
                { message: 'Programm', id: 4 },
            ],
            newMessageText: '',
        },
    }, 

    getState() {
        return this._state;
    },

    subscribe(observe){
        renderElem = observe
    },

    dispatch(action){
        this._state = dialogsReducer(this._state.posts, action);
        this._state = profileReducer(this._state.dialogs, action);
        renderElem(this._state);
    }    
};

export default store;