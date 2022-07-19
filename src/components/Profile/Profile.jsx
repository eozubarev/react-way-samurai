import React from 'react';
import Posts from './Posts/Posts';
import PostsContainer from './Posts/PostsContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <PostsContainer store={props.store} />
    </div>
  )
}

export default Profile