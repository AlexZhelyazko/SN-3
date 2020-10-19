import React from 'react'
import Myposts from './MyPosts/myposts'
import postStyle from './post.module.css'

const Post = (props) => {
    const p = props.txt.map((t) => {
        return <Myposts text = {t.text} id = {t.id} />
    })
    return (
        <div>
            <input className={postStyle.inputStyle} type = 'text'></input>
            <button className = {postStyle.buttonStyle}>Add Post</button>
            {p}
        </div>
    )
}

export default Post