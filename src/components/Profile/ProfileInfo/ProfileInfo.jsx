import React from 'react';
import styles from './ProfileInfo.module.scss'
import defaultPhoto from '../../../images/users/default.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img className={styles.img__test} src="https://static9.depositphotos.com/1001951/1237/i/600/depositphotos_12373773-stock-photo-ocean-water-background.jpg" alt="" />
      </div> */}
      <div>
        <img className={styles.avatar} src={props.profile.photos.small != null ? props.profile.photos.small : defaultPhoto} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <p>{props.profile.fullName}</p>
        <p>Обо мне: {props.profile.aboutMe}</p>
        <p>Работа: {props.profile.lookingForAJob === true ? 'Ищу работу' : 'Не ищу'}</p>
      </div>
    </div>
  )
}


export default ProfileInfo