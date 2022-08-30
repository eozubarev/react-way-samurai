import React from 'react';
import Posts from './Posts';
import { addPostActionCreator } from '../../../Redux/reducers/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer









// const PostsContainer = (props) => {

//   let state = props.store.getState();

//   let addPost = () => {
//     let action = addPostActionCreator();
//     props.store.dispatch(action);
//   }

//   let updateNewPostText = (textPost) => {
//     let action = updateNewPostTextActionCreator(textPost);
//     props.store.dispatch(action);
//   }

//   return ( <Posts 
//     updateNewPostText={updateNewPostText} 
//     addPost={addPost} 
//     posts={state.profilePage.posts} 
//     newPostText={state.profilePage.newPostText} /> )
// }
