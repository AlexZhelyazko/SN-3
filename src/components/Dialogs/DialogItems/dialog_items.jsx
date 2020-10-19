import React from 'react';
import dialogStyle from '../dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className = {dialogStyle.dialog}>{props.name}</div>
    )
}

export default DialogItem