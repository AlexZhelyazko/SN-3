import React from 'react';
import dialogStyle from '../dialogs.module.css'

const Messages = (props) => {
    return (
    <div className = {dialogStyle.dialog}>{props.message}</div>
    )
}

export default Messages