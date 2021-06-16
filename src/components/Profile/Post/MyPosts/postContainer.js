import Post from '../post.jsx'
import {addPostActionCreator} from '../../../Redux/profile-reducer'
import {onInputChangeActionCreator} from '../../../Redux/profile-reducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    debugger
    return {
        newPostText: state.posts.value,
        txt: state.posts.txt,
        id: state.posts.id
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))},
        onInputChange: (newPostText) => {dispatch(onInputChangeActionCreator(newPostText))}
    }
};


const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer