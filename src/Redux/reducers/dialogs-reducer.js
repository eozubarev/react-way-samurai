const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
        messages: [{
            id: 1,
            message: "hi"
        },
        {
            id: 2,
            message: "How are your?"
        },
        {
            id: 3,
            message: "Yo"
        },
        {
            id: 4,
            message: "Thanks"
        },
        {
            id: 5,
            message: "Bye"
        },
        {
            id: 6,
            message: "Hello"
        },
    ],
    dialogs: [{
            id: 1,
            name: "Dimych"
        },
        {
            id: 2,
            name: "Sveta"
        },
        {
            id: 3,
            name: "Sasha"
        },
        {
            id: 4,
            name: "Viktor"
        },
        {
            id: 5,
            name: "Valera"
        },
        {
            id: 6,
            name: "Sveta"
        },
    ],
    newMessagesBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.messageBody;
            return state
        case SEND_MESSAGE:
            let body = state.newMessagesBody;
            state.newMessagesBody = '';
            state.messages.push({
                id: 7,
                message: body
            })
            return state
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer