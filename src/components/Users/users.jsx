import React from 'react';
import userStyle from './users.module.css'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'

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
                <div>{u.followed ?
                    <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {
                                withCredentials: true,
                                headers: { 'API-KEY': '4e0c2e3a-1448-441a-bba9-5de74fac940c' }
                            }
                        )
                            .then(response => {
                                if (response.data.resultCode == 0){
                                    props.unfollow(u.id)
                                }
                            })
                    }}>Unfollow </button> :
                    <button onClick={ () => { //TODO
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                            {
                                withCredentials: true,
                                headers: { 'API-KEY': '4e0c2e3a-1448-441a-bba9-5de74fac940c' }
                            }
                        )
                            .then(response => {
                                if (response.data.resultCode == 0){
                                    props.follow(u.id)
                                }
                            })
                    }
                    }>Follow </button>}
                </div>
            </div>
        )}
    </div >
}
export default Users;
