const Follow = 'FOLLOW';
const Unfollow = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
let initialState = {
    users: [
        {
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            key: 1, following: true, name: 'Alex', status: 'married', city: 'Minsk'
        },
        {
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            key: 2, following: false, name: 'Dmitri', status: 'I am free', city: 'Moscow'
        },
        {
            imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            key: 3, following: true, name: 'Roberto', status: 'Sex', city: 'Mexico'
        },
    ],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.key === action.key) {
                        console.log(action.key);
                        return { ...u, following: true }
                    }
                    return u;
                })
            }
        case Unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.key === action.key) {
                        console.log(action.key);
                        return { ...u, following: false }
                    }
                    return u;
                })
            }
        case SetUsers:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userID) => {
    return { type: 'FOLLOW', key: userID }
}

export const unfollowAC = (userID) => {
    return { type: 'UNFOLLOW', key: userID }
}

export const setUsersAC = (users) => {
    return { type: 'SET-USERS', users: users }
}

export default userReducer