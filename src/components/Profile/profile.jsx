import React from 'react';
import PostContainer from './Post/MyPosts/postContainer'
import ProfileInfo from './ProfieInfo/profileinfo'

const Profile = (props) => {
    
    return (
        <div className='content'>
           <ProfileInfo />
            <div style = {{margin: '10px'}}>New post</div>
            <PostContainer/>
        </div>
    )
}

export default Profile