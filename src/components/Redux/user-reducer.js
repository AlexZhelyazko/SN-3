import { UserAPI } from '../../API/api';


const Follow = 'FOLLOW';
const Unfollow = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
const SetCurrentPage = 'SET-CURRENT-PAGE'
const SetTotalCount = 'SET-TOTAL-COUNT'
const changeFetchFlag = 'CHANGE-FETCH-FLAG'
const ToggleFollowingProgress = 'TOGGLE-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],

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
                ...state, users: [...action.users.items]
            }
        case SetCurrentPage:
            return {
                ...state, currentPage: action.page
            }
        case SetTotalCount:
            return {
                ...state, totalCount: action.count
            }
        case changeFetchFlag:
            return {
                ...state, isFetching: action.flag
            }
        case ToggleFollowingProgress:
            return {
                ...state,
                followingInProgress: action.isFetching
                ?[...state.followingInProgress, action.userID] 
                :state.followingInProgress.filter(id => id != action.userID)
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

export const ToggleFollowingProgressAC = (isFetching, userID) => {
    return { type: 'TOGGLE-FOLLOWING-PROGRESS', isFetching: isFetching, userID: userID }
}

export const getUsersThunkCreator = (pageSize, currentPage) => { 
    return (dispatch) => {
        dispatch(setCurrentPageAC(currentPage));
        dispatch(ChangeFetchFlagAC(true));
        UserAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(ChangeFetchFlagAC(false));
                dispatch(setUsersAC(data));
                dispatch(setTotalCountAC(data.totalCount));
            });
    }
}

export const unfollowUserTC = (userID) => {
    return (dispatch) => {
        dispatch(ToggleFollowingProgressAC(true, userID))
        UserAPI.unfollowUser(userID)
            .then(response => {
                if (response.data.resultCode == 0){
                    dispatch(unfollowAC(userID))
                }
                dispatch(ToggleFollowingProgressAC(false, userID))
            })
    }
}

export const followUserTC = (userID) => {
    return (dispatch) => {
        dispatch(ToggleFollowingProgressAC(true, userID))
        UserAPI.followUser(userID)
            .then(response => {
                if (response.data.resultCode == 0){
                    dispatch(followAC(userID))
                }
                dispatch(ToggleFollowingProgressAC(false, userID))
            })
    }
}

export default userReducer