import Users from './users';
import {followAC} from '../Redux/user-reducer';
import {unfollowAC} from '../Redux/user-reducer';
import {setUsersAC} from '../Redux/user-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {dispatch(followAC(userID))},
        unfollow: (userID) => {dispatch(unfollowAC(userID))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
    }
};


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer