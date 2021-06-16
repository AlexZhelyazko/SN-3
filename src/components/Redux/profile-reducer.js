const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    txt: [
        { text: 'Hello', id: '1' },
        { text: 'World', id: '1' },
        { text: '!!!', id: '1' },
    ],
    newPostText: '',
};

let profileReducer = (state = initialState, action) => {
    let newPost = {
        text: action.postMessage,
        id: '1',
    };
    switch (action.type) {
        case AddPost:
            return {
                ...state,
                newPostText: '',
                txt: [...state.txt, newPost],
            }
        case UpdateNewPostText:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    };
};

export const addPostActionCreator = (value) => {
    return { type: 'ADD-POST', postMessage: value }
};

export const onInputChangeActionCreator = (value) => {
    return { type: 'UPDATE-NEW-POST-TEXT', newText: value }
};

export default profileReducer