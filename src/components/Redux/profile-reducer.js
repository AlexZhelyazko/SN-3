const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';

let profileReducer = (state, action) => {
    switch (action.type) {
        case AddPost:
            let newPost = {
                text: action.postMessage,
                id: '1',
            };
            state.txt.push(newPost);
            state.newPostText = '';
            return state;
        case UpdateNewPostText:
            state.newPostText = action.newText;
            return state;
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