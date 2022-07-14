import React from 'react';
import Posts from './Posts/Posts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <ProfileInfo />
      <Posts 
        newPostText={props.profilePage.newPostText} 
        postsData={props.profilePage.postsData}
        dispatch={props.dispatch} 
        />
    </div>
  )
}

export default Profile