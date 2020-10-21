import {renderElem} from '../../render'

const state = {
    txt: [
        { text: 'Hello', id: '1' },
        { text: 'World', id: '1' },
        { text: '!!!', id: '1' },
    ],

    dialogs: {
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
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        text: postMessage,
        id: '1',
    };
    state.txt.push(newPost);
    renderElem(state);
}

export default state;