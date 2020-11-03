import React from 'react'
import Myposts from './MyPosts/myposts'
import postStyle from './post.module.css'
import {addPostActionCreator} from '../../Redux/state'
import {onInputChangeActionCreator} from '../../Redux/state'

const Post = (props) => {
    
    const p = props.txt.map((t) => {
        return <Myposts text = {t.text} id = {t.id} />
    });

    let inputValue = React.createRef();
    
    let addPost = () => {
        let value = inputValue.current.value;
        props.dispatch(addPostActionCreator(value));
    };

    let onInputChange = () => {
        let value = inputValue.current.value;
        props.dispatch(onInputChangeActionCreator(value));
    };

    return (
        <div>
            <textarea onChange = {onInputChange} ref = {inputValue} className={postStyle.inputStyle} value = {props.value} type = 'text'></textarea>
            <button onClick = {addPost} className = {postStyle.buttonStyle}>Add Post</button>
            {p}
        </div>
    );
};

export default Post