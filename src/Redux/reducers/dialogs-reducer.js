const SEND_MESSAGE = "SEND-MESSAGE"

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessagesBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogsReducer