import React from 'react';
import userStyle from './users.module.css'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>{pages.map(p => <span onClick={() => props.onPageChanged(p)}>||{p}||</span>)}</div>
        {props.friends.users.map(u =>
            <div className={userStyle.wrap}>
                <div>
                    <NavLink to={`profile/${u.id}`}>
                        <img src={u.photos.small == null ?
                            'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' :
                            u.photos.small} />
                    </NavLink>
                </div>
                <div>{u.name}</div>
                <div>{u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unfollowUser(u.id) }}>Unfollow </button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.followUser(u.id)}}>Follow </button>}
                </div>
            </div>
        )}
    </div >
}
export default Users;
