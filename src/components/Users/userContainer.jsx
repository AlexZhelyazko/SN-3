import Users from './users';
import React from 'react';
import { followAC } from '../Redux/user-reducer';
import { unfollowAC } from '../Redux/user-reducer';
import { setUsersAC } from '../Redux/user-reducer';
import { setCurrentPageAC } from '../Redux/user-reducer';
import { connect } from 'react-redux';
import { setTotalCountAC } from '../Redux/user-reducer'
import { ChangeFetchFlagAC } from '../Redux/user-reducer';
import Loader from '../Loader/loader';
import * as axios from 'axios'

class UsersShadowContainer extends React.Component {
    componentDidMount = () => {
        this.props.ChangeFetchFlag(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.ChangeFetchFlag(false);
                this.props.setUsers(response);
                this.props.SetTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (page) => {
        this.props.SetCurrentPage(page);
        this.props.ChangeFetchFlag(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.ChangeFetchFlag(false);
                this.props.setUsers(response);
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
    }
};


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersShadowContainer)

export default UserContainer