const Follow = 'FOLLOW';
const Unfollow = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 10,
    currentPage: 1,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
            debugger
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case Unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SetUsers:
            return {
                ...state, users: [...state.users, ...action.users.data.items]
            }
        default:
            return state
    }
}

export const followAC = (userID) => {
    return { type: 'FOLLOW', id: userID }
}

export const unfollowAC = (userID) => {
    return { type: 'UNFOLLOW', id: userID }
}

export const setUsersAC = (users) => {
    return { type: 'SET-USERS', users: users }
}

export default userReducer