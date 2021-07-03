const Follow = 'FOLLOW';
const Unfollow = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
const SetCurrentPage = 'SET-CURRENT-PAGE'
const SetTotalCount = 'SET-TOTAL-COUNT'
const ChangeFetchFlag = 'CHANGE-FETCH-FLAG'

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow:
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
                ...state, users: [...action.users.data.items]
            }
        case SetCurrentPage:
            return {
                ...state, currentPage: action.page
            }
        case SetTotalCount:
            return {
                ...state, totalCount: action.count
            }
        case ChangeFetchFlag:
            return {
                ...state, isFetching: action.flag
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

export const setCurrentPageAC = (page) => {
    return { type: 'SET-CURRENT-PAGE', page: page }
}

export const setTotalCountAC = (count) => {
    return { type: 'SET-TOTAL-COUNT', count: count }
}

export const ChangeFetchFlagAC = (flag) => {
    return { type: 'CHANGE-FETCH-FLAG', flag: flag }
}

export default userReducer