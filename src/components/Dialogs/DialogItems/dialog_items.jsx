import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogStyle from '../dialogs.module.css'


const DialogItem = (props) => {
    return (
        <NavLink to = {`/messages/${props.id}`} activeClassName={dialogStyle.activeDialog} className = {dialogStyle.dialog}>{props.name}</NavLink>
    )
}

export default DialogItem