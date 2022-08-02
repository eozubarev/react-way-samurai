const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [{
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
    profile: null,
    newPostText: 'hi hello',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, {...newPost}],
                newPostText: ''
            }
        
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.text
            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}


export default profileReducer