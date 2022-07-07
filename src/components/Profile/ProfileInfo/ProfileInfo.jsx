import React from 'react';
import styles from './ProfileInfo.module.scss'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={styles.img__test} src="https://static9.depositphotos.com/1001951/1237/i/600/depositphotos_12373773-stock-photo-ocean-water-background.jpg" alt="" />
      </div>
      <div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo