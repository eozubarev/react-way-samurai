let rerenderEntireTree = () => {
    console.log('state was changed');
}

let state = {
    profilePage: {
        posts: [
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
};

export const addPost = () => { 
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);

}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}

export default state;