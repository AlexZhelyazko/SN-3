import React from 'react';
import dialogStyle from './dialogs.module.css'
import DialogItem from './DialogItems/dialog_items'
import Messages from './MessageItems/message_items'
import {onSendMessageCreator} from '../Redux/dialogs-reducer'
import {onUpdateMessageTextCreator} from '../Redux/dialogs-reducer'
import Dialogs from './dialogs'

const dialogsContainer = (props) => {
    let sendMessage = (value) => {
        props.dispatch(onSendMessageCreator(value));
    }

    let onInputChange = (value) => {
        props.dispatch(onUpdateMessageTextCreator(value));
    }
    
    return (
        <Dialogs sendMessage = {sendMessage} onInputChange = {onInputChange} dialogs={props.state.dialogs}/>
    )
}

export default dialogsContainer