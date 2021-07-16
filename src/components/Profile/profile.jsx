import React from 'react';
import PostContainer from './Post/MyPosts/postContainer'
import ProfileInfo from './ProfieInfo/profileinfo'
import {Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { setCurrentProfileAC } from '../Redux/profile-reducer';
import Loader from '../Loader/loader';
import { GetProfileTC } from '../Redux/profile-reducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';

class Profile extends React.Component {
    componentDidMount = () => {
        this.props.GetProfile(this.props.match.params.userId)
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
        currentProfileInfo: state.posts.currentProfile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        SetCurrentProfile: (profileInfo) => {dispatch(setCurrentProfileAC(profileInfo))},
        GetProfile: (userID) => {dispatch(GetProfileTC(userID))}
    }
}


let AuthRedirect = withAuthRedirect(Profile)

let ProfileRouteContainer = withRouter(AuthRedirect)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileRouteContainer)

export default ProfileContainer