import React from 'react';
import PostContainer from './Post/MyPosts/postContainer'
import ProfileInfo from './ProfieInfo/profileinfo'

const Profile = (props) => {
    return (
        <div className='content'>
           <ProfileInfo />
            <div>New post</div>
            <PostContainer txt = {props.txt} value = {props.value} dispatch = {props.dispatch}/>
        </div>
    )
}

export default Profile