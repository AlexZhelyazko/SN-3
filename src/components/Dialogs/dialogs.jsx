import React from 'react';
import dialogStyle from './dialogs.module.css'
import DialogItem from './DialogItems/dialog_items'
import Messages from './MessageItems/message_items'
import {onSendMessageCreator} from '../Redux/dialogs-reducer'
import {onUpdateMessageTextCreator} from '../Redux/dialogs-reducer'


const Dialogs = (props) => {
    const dialog = props.dialogs.dialogsItems.map( (d) => {
        return <DialogItem name= {d.name} id = {d.id} />
    })
    
    const message = props.dialogs.messageItems.map((m) => {
        return <Messages message={m.message} id = {m.id} />
    })

    let inputValue = React.createRef();

    let sendMessage = () => {
        let m = inputValue.current.value;
        props.sendMessage(m);
    }

    let onInputChange = () => {
        let m = inputValue.current.value;
        props.onInputChange(m);
    }
    
    return (
        <div className={dialogStyle.wrap}>
            <div>
                <h2>Dialogs</h2>
                {dialog}
            </div>
            <div>
                <h2>Messages</h2>
                {message}
                <textarea ref = {inputValue} onChange = {onInputChange} value = {props.dialogs.newMessageText}></textarea>
                <button onClick = {sendMessage}></button>
            </div>
        </div>
    )
}

export default Dialogs