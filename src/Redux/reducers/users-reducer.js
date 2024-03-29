import { usersAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    folowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(user => { 
                    if (user.id == action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map(user => { 
                if (user.id == action.userId) {
                    return {...user, followed: false}
                }
                return user
            })
        }

        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, 
                folowingInProgress: action.isFetching 
                    ? [...state.folowingInProgress, action.id]
                    : state.folowingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
    }
}

// Action Creators

export const followSuccess = (userId) => {
    return {
        type: FOLLOW, userId
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}

export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
    }
}


export const getUsers = (currentPage, pageSize) => {
    
    return (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
    
        usersAPI.getUsers(currentPage, pageSize).then(data => { 
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
    
} 


export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
                             
        usersAPI.follow(userId).then(data => { 
            if (data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
    
} 

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
                             
        usersAPI.unfollow(userId).then(data => { 
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
    
} 

export default usersReducer