import React from 'react';
import {onSendMessageCreator} from '../Redux/dialogs-reducer'
import {onUpdateMessageTextCreator} from '../Redux/dialogs-reducer'
import Dialogs from './dialogs'

const DialogsContainer = (props) => {
    let sendMessage = (value) => {
        props.dispatch(onSendMessageCreator(value));
    }

    let onInputChange = (value) => {
        props.dispatch(onUpdateMessageTextCreator(value));
    }
    
    return (
        <Dialogs sendMessage = {sendMessage} onInputChange = {onInputChange} dialogs={props.dialogs}/>
    )
}

export default DialogsContainer