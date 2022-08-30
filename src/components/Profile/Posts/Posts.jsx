import React from 'react';

import styles from './Posts.module.css';
import Post from './Post/Post';
import { useRef } from 'react';
import AddNewPostReduxForm from './AddNewPostForm/AddNewPostForm';

const MyPosts = (props) => {
  let postsElements = props.posts.map((item, index) => {
    return <Post key={index} id={item.id} message={item.message} likesCount={item.likesCount} />
  })

  let postTextarea = React.useRef();

  // let onAdPost = () => {
  //   props.addPost();
  // }

  // let onPostChange = () => {
  //   let textPost = postTextarea.current.value;
  //   props.updateNewPostText(textPost)
  // }

  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div> 
      My posts
      <div>
        <AddNewPostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts