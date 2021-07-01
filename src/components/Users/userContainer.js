import Users from './users';
import {followAC} from '../Redux/user-reducer';
import {unfollowAC} from '../Redux/user-reducer';
import {setUsersAC} from '../Redux/user-reducer';
import { setCurrentPageAC } from '../Redux/user-reducer';
import {connect} from 'react-redux';
import {setTotalCountAC} from '../Redux/user-reducer'

let mapStateToProps = (state) => {
    return {
        pageSize: state.users.pageSize,
        friends: state.users,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        SetCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        SetTotalCount: (count) => {dispatch(setTotalCountAC(count))},
    }
};


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer