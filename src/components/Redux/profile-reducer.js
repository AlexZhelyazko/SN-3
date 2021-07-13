import { UserAPI } from "../../API/api";
const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SetCurrentProfile = 'SET-CURRENT-PROFILE';

let initialState = {
    txt: [
        { text: 'Hello', id: '1' },
        { text: 'World', id: '1' },
        { text: '!!!', id: '1' },
    ],
    newPostText: '',
    currentProfile: null
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
        case SetCurrentProfile:
            return {
                ...state, currentProfile: action.profileInfo
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

export const setCurrentProfileAC = (profileInfo) => {
    return { type: 'SET-CURRENT-PROFILE', profileInfo: profileInfo }
};

export const GetProfileTC = (userID) => {
    return (dispatch) => {
        UserAPI.getProfile(userID)
        .then(response => {
            dispatch(setCurrentProfileAC(response.data))
        });
    }
}

export default profileReducer