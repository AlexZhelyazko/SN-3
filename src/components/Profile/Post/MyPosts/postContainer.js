import React from 'react'
import Post from '../post.jsx'
import {addPostActionCreator} from '../../../Redux/profile-reducer'
import {onInputChangeActionCreator} from '../../../Redux/profile-reducer'

const PostContainer = (props) => {
    
    let addPost = (value) => {
        props.dispatch(addPostActionCreator(value));
    };

    let onInputChange = (value) => {
        let action = onInputChangeActionCreator(value)
        props.dispatch(action);
    };

    return (
        <Post addPost = {addPost} onInputChange = {onInputChange} value = {props.value} txt = {props.txt} id = {props.id}/>
    );
};

export default PostContainer