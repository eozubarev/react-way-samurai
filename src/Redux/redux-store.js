import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 

import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import usersReducer from "./reducers/users-reducer";
import { reducer as formReducer } from 'redux-form'
import authReducer from "./reducers/auth-reducer";
import appReducer from "./reducers/app-reduces";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;