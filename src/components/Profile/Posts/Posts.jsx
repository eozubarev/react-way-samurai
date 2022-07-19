import React from 'react';

import styles from './Posts.module.css';
import Post from './Post/Post';
import { useRef } from 'react';

const MyPosts = (props) => {

  let postsElements = props.posts.map(item => {
    return <Post key={item.id} id={item.id} message={item.message} likesCount={item.likesCount} />
  })

  let postTextarea = React.useRef();

  let onAdPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let textPost = postTextarea.current.value;
    props.updateNewPostText(textPost)
  }

  return (
    <div> 
      My posts
      <div>
        <textarea ref={postTextarea} onChange={onPostChange} value={props.newPostText}/>
        <button onClick={onAdPost}>Add post</button>
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts