import Users from './users';
import React from 'react';
import { followAC, ToggleFollowingProgressAC } from '../Redux/user-reducer';
import { unfollowAC } from '../Redux/user-reducer';
import { setUsersAC } from '../Redux/user-reducer';
import { setCurrentPageAC } from '../Redux/user-reducer';
import { connect } from 'react-redux';
import { setTotalCountAC } from '../Redux/user-reducer'
import { ChangeFetchFlagAC } from '../Redux/user-reducer';
import Loader from '../Loader/loader';
import * as axios from 'axios'
import { getUsers } from '../../API/api';
class UsersShadowContainer extends React.Component {
    componentDidMount = () => {
        this.props.ChangeFetchFlag(true);
        getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.ChangeFetchFlag(false);
                this.props.setUsers(data);
                this.props.SetTotalCount(data.totalCount)
            });
    }

    onPageChanged = (page) => {
        this.props.SetCurrentPage(page);
        this.props.ChangeFetchFlag(true);
        getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.ChangeFetchFlag(false);
                this.props.setUsers(data);
            });
    }
    render() {
        return <>
        {this.props.isFetching === true ? <Loader/>: null}
        <Users setUsers={this.props.setUsers}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            friends={this.props.friends}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingProgress = {this.props.ToggleFollowingProgress}
            followingInProgress = {this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        pageSize: state.users.pageSize,
        friends: state.users,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
    }
};

let mapDispatchToProps = (dispatch) => { 
    return {
        follow: (userID) => { dispatch(followAC(userID)) },
        unfollow: (userID) => { dispatch(unfollowAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        SetCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) },
        SetTotalCount: (count) => { dispatch(setTotalCountAC(count)) },
        ChangeFetchFlag: (flag) => { dispatch(ChangeFetchFlagAC(flag)) },
        ToggleFollowingProgress: (isFetching, userID) => {dispatch(ToggleFollowingProgressAC(isFetching, userID))},
    }
};


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersShadowContainer)

export default UserContainer