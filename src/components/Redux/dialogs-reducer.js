const UpdateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';
const SendMessage = 'SEND-MESSAGE';

let initialState = {
    dialogsItems: [
        { name: 'Alex', id: 1 },
        { name: 'Dmitriy', id: 2 },
        { name: 'Artemiy', id: 3 },
        { name: 'Vladilen', id: 4 },
    ],

    messageItems: [
        { message: 'Hello', id: 1 },
        { message: 'World', id: 2 },
        { message: 'Yo', id: 3 },
        { message: 'Programm', id: 4 },
    ],
    newMessageText: '',
};

let dialogsReducer = (state = initialState, action) => {
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