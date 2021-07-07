import React from 'react';
import PostContainer from './Post/MyPosts/postContainer'
import ProfileInfo from './ProfieInfo/profileinfo'
import {withRouter} from 'react-router-dom'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setCurrentProfileAC } from '../Redux/profile-reducer';
import Loader from '../Loader/loader';
class Profile extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
        .then(response => {
            this.props.SetCurrentProfile(response.data)
        });
    };
    render() {
        if (this.props.currentProfileInfo == null){
            return <Loader/>
        }
        else {
            return (
                <div className='content'>
                    <ProfileInfo props = {this.props.currentProfileInfo} />
                    <div style={{ margin: '10px' }}>New post</div>
                    <PostContainer />
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        currentProfileInfo: state.posts.currentProfile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        SetCurrentProfile: (profileInfo) => {dispatch(setCurrentProfileAC(profileInfo))}
    }
}

let ProfileRouteContainer = withRouter(Profile)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileRouteContainer)

export default ProfileContainer