import React from 'react';

import styles from './Posts.module.css';
import Post from './Post/Post';
import { useRef } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/store';

const MyPosts = (props) => {

  let postsElements = props.postsData.map(item => {
    return <Post key={item.id} id={item.id} message={item.message} likesCount={item.likesCount} />
  })

  let postTextarea = React.useRef();

  let newPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  }

  let onPostChange = () => {
    let textPost = postTextarea.current.value;
    let action = updateNewPostTextActionCreator(textPost);
    props.dispatch(action);
  }

  return (
    <div>
      My posts
      <div>
        <textarea ref={postTextarea} onChange={onPostChange} value={props.newPostText}/>
        <button onClick={newPost}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts