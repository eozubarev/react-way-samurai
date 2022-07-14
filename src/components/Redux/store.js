const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let store = {
    _state : {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: "Hi, how are you?",
                    likesCount: 0,
                },
                {
                    id: 2,
                    message: "Это мой первый пост",
                    likesCount: 23,
                },
            ],
            newPostText: 'hi hello',
        },

        dialogsPage: {
            messages: [
                { id: 1, message: "hi" },
                { id: 2, message: "How are your?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Thanks" },
                { id: 5, message: "Bye" },
                { id: 6, message: "Hello" },
            ],
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Sveta" },
                { id: 3, name: "Sasha" },
                { id: 4, name: "Viktor" },
                { id: 5, name: "Valera" },
                { id: 6, name: "Sveta" },
            ],
            newMessagesBody: "",
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    href: '#1',
                    avatar: 'https://st.depositphotos.com/1008939/2240/i/600/depositphotos_22408839-stock-photo-serious.jpg'
                },
                {
                    id: 2,
                    href: '#2',
                    name: 'Olga',
                    avatar: 'https://nevsepic.com.ua/uploads/posts/2011-09/thumbs/1315769408_386555_www.nevsepic.com.ua.jpg'
                },
                {
                    id: 3,
                    href: '#3',
                    name: 'Viktor',
                    avatar: 'https://i.pinimg.com/236x/ab/0a/9e/ab0a9efc0be76aabcc54aff2ba3cee48--to-tell-truths.jpg'
                },
            ]
        }
    },
    _callSubscriber () {
        console.log('state was changed');
    },

    getState () {
        return this._state;
    },
    subscriber (observer) {
        this._callSubscriber = observer;
    },

    // addPost () { 
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };

    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);

    // },
    // updateNewPostText (newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessagesBody = action.messageBody;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessagesBody;
            this._state.dialogsPage.newMessagesBody = '';
            this._state.dialogsPage.messages.push({ id: 7, message: body })
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, text: text}
}

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}

export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default store;