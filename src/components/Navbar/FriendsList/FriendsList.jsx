import React from 'react';
import friend from './FriendsList.module.css'

const FriendsList = (props) => {
    return (
        <div>
            {props.friend}
        </div>
    );
}

export default FriendsList