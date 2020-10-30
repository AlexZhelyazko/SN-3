import React from 'react';
import Post from './Post/post'
import ProfileInfo from './ProfieInfo/profileinfo'

const Profile = (props) => {
    return (
        <div className='content'>
           <ProfileInfo />
            <div>New post</div>
            <Post txt = {props.txt} value = {props.value} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/>
        </div>
    )
}

export default Profile