const UpdateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';
const SendMessage = 'SEND-MESSAGE';

let dialogsReducer = (state, action) => {
    switch (action.type) {
        case UpdateNewMessageText:
            state.newMessageText = action.newMsg;
            return state;
        case SendMessage:
            let msg = { message: action.message, id: 1 };
            state.messageItems.push(msg);
            state.newMessageText = '';
            return state;
        default: return state
    }
};

export  const onUpdateMessageTextCreator = (value) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', newMsg: value }
};

export  const onSendMessageCreator = (value) => {
    return {type: 'SEND-MESSAGE', message: value }
};

export default dialogsReducer