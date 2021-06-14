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
    switch (action.type) {
        case AddPost: {
            let newPost = {
                text: action.postMessage,
                id: '1',
            };
            let stateCopy = {...state};
            stateCopy.txt = [...state.txt]
            stateCopy.txt.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UpdateNewPostText: 
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    };
};

export  const addPostActionCreator = (value) => {
    return {type: 'ADD-POST', postMessage: value}
};

export  const onInputChangeActionCreator = (value) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: value }
};

export default profileReducer