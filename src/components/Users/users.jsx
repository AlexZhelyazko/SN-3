import React from 'react';
import userStyle from './users.module.css'

const Users = (props) => {
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

export default Users;