import Users from './users';
import React from 'react';
import { followAC, getUsersThunkCreator, ToggleFollowingProgressAC, unfollowUserTC, followUserTC } from '../Redux/user-reducer';
import { unfollowAC } from '../Redux/user-reducer';
import { setCurrentPageAC } from '../Redux/user-reducer';
import { connect } from 'react-redux';
import Loader from '../Loader/loader';
class UsersShadowContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (page) => {
        this.props.SetCurrentPage(page);
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
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
            unfollowUser = {this.props.unfollowUser}
            followUser = {this.props.followUser}
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
        SetCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) },
        ToggleFollowingProgress: (isFetching, userID) => {dispatch(ToggleFollowingProgressAC(isFetching, userID))},
        getUsersThunk: (pageSize, currentPage) => {dispatch(getUsersThunkCreator(pageSize, currentPage))},
        unfollowUser: (userID) => {dispatch(unfollowUserTC(userID))},
        followUser: (userID) => {dispatch(followUserTC(userID))},
    }
};


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersShadowContainer)

export default UserContainer