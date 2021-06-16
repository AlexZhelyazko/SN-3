import React from 'react'
import Myposts from './MyPosts/myposts'
import postStyle from './post.module.css'

const Post = (props) => {
    const p = props.txt.map((t) => {
        return <Myposts text = {t.text} id = {t.id} />
    });

    let inputValue = React.createRef();
    
    let addPost = () => {
        let value = inputValue.current.value;
        props.addPost(value);
    };

    let onInputChange = () => {
        debugger
        let value = inputValue.current.value;
        props.onInputChange(value)
    };
    return (
        <div className = {postStyle.cont}>
            {p}
            <textarea onChange = {onInputChange} ref = {inputValue} className={postStyle.inputStyle} newPostText = {props.newPostText} type = 'text'></textarea>
            <button onClick = {addPost} className = {postStyle.buttonStyle}>Add Post</button>
        </div>
    );
};

export default Post