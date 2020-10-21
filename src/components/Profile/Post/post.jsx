import React from 'react'
import Myposts from './MyPosts/myposts'
import postStyle from './post.module.css'

const Post = (props) => {
    
    const p = props.txt.map((t) => {
        return <Myposts text = {t.text} id = {t.id} />
    })

    let inputValue = React.createRef()
    let addPost = () => {
        let value = inputValue.current.value;
        props.addPost(value);
        inputValue.current.value = '';
    }

    return (
        <div>
            <input ref = {inputValue} className={postStyle.inputStyle} type = 'text'></input>
            <button onClick = {addPost} className = {postStyle.buttonStyle}>Add Post</button>
            {p}
        </div>
    )
}

export default Post