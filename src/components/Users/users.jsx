import React from 'react';
import userStyle from './users.module.css'
import * as axios from 'axios'


class Users extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response);
                this.props.SetTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (page) => {
        this.props.SetCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response);
            });
    }

    render() {
        let pages = [];
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };
        return (
            <div>
                <div>{pages.map(p => <span onClick={() => this.onPageChanged(p)}>||{p}||</span>)}</div>
                {this.props.friends.users.map(u =>
                    <div className={userStyle.wrap}>
                        <div><img src={u.photos.small == null ? 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' : u.photos.small} /></div>
                        <div>{u.name}</div>
                        <div>{u.followed ?
                            <button onClick={() => { this.props.unfollow(u.id) }}>Follow </button> :
                            <button onClick={() => { this.props.follow(u.id) }}>Unfollow </button>}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

/* const Users = (props) => {
    return <div>
        {props.friends.users.map(u =>
            <div className={userStyle.wrap}>
                <div><img src={u.imageURL} /></div>
                <div>{u.name}</div>
                <div>{u.following ?
                    <button onClick={() => {props.unfollow(u.key)}}>Follow </button> :
                    <button onClick={() => {props.follow(u.key)}}>Unfollow </button>}
                </div>
            </div>
        )}
    </div>
}
 */
export default Users;