import React from 'react';
import dialogStyle from './dialogs.module.css'
import DialogItem from './DialogItems/dialog_items'
import Messages from './MessageItems/message_items'

const Dialogs = (props) => {
    const dialog = props.dialogs.dialogsItems.map( (d) => {
        return <DialogItem name= {d.name} id = {d.id} />
    })
    
    const message = props.dialogs.messageItems.map((m) => {
        return <Messages message={m.message} id = {m.id} />
    })
    return (
        <div className={dialogStyle.wrap}>
            <div>
                <h2>Dialogs</h2>
                {dialog}
            </div>
            <div>
                <h2>Messages</h2>
                {message}
            </div>
        </div>
    )
}

export default Dialogs