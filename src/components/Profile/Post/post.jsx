import React from 'react'
import Myposts from './MyPosts/myposts'
import postStyle from './post.module.css'

const Post = (props) => {
    
    const p = props.txt.map((t) => {
        return <Myposts text = {t.text} id = {t.id} />
    });

    let inputValue = React.createRef();
    
    let addPost = () => {
        debugger
        let value = inputValue.current.value;
        props.dispatch({type: 'ADD-POST', postMessage: value});
        //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: value});
    };

    let onInputChange = () => {
        let value = inputValue.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: value });
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