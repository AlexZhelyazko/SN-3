import React from 'react';
import PostContainer from './Post/MyPosts/postContainer'
import ProfileInfo from './ProfieInfo/profileinfo'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { setCurrentProfileAC } from '../Redux/profile-reducer';
import Loader from '../Loader/loader';
import { GetProfileTC } from '../Redux/profile-reducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

class Profile extends React.Component {
    componentDidMount = () => {
        this.props.GetProfile(this.props.match.params.userId)
    };
    render() {
        // if (this.props.currentProfileInfo == null){
        //     return <Loader/>
        // }
        //else {
            return (
                <div className='content'>
                    {/* <ProfileInfo props = {this.props.currentProfileInfo} /> */}
                    <div style={{ margin: '10px', color: 'white' }}>New post</div>
                    <PostContainer />
                </div>
            )
        //}
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

export default compose( connect(mapStateToProps, mapDispatchToProps),withRouter)(Profile) 