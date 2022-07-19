import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/reducers/profile-reducer';

const PostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  }

  let updateNewPostText = (textPost) => {
    let action = updateNewPostTextActionCreator(textPost);
    props.store.dispatch(action);
  }

  return ( <Posts 
    updateNewPostText={updateNewPostText} 
    addPost={addPost} 
    posts={state.profilePage.posts} 
    newPostText={state.profilePage.newPostText} /> )
}

export default PostsContainer