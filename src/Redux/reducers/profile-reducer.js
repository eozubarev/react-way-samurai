import { profileAPI } from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_STATUS = "SET_STATUS";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE_IN_STATE = "SET_USER_PROFILE_IN_STATE";

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
    status: "",
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

        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }

        case SET_USER_PROFILE_IN_STATE:
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

export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}
 
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE_IN_STATE, profile
    }
}


export const getAuthUserProfile = (userId) => {
    
    return (dispatch) => {
        profileAPI.setUserProfile(userId).then(data => { 
            dispatch(setUserProfile(data))
          })
    }
    
} 

export const getStatus = (userId) => {
    
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => { 
                dispatch(setStatus(data))
          })
    }
    
} 


export const updateStatus = (status) => {
    
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => { 
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
          })
    }
    
} 



export default profileReducer