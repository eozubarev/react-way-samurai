import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [{
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
        },
        sidebar: {
            friends: [{
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
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

export default store;