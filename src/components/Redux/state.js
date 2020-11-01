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
        },
    }, 

    getState() {
        return this._state;
    },

    subscribe(observe){
        renderElem = observe
    },

    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                text: action.postMessage,
                id: '1',
            };
            this._state.posts.txt.push(newPost);
            this._state.posts.newPostText = '';
            renderElem(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.posts.newPostText = action.newText;
            renderElem(this._state);
        }
    }
    
};

export default store;