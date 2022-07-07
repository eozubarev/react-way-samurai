import React from 'react'
import styles from './Friends.module.scss'

const Friends = (props) => {

    console.log(props);

    let friends = props.state.friends.map(item => {
        return <div className={styles.friend} key={item.id}>
                    <div className={styles.avatar}>
                        <img src={item.avatar} alt={`Фотография профиля: ${item.name}`} />
                    </div>
                    <div className={styles.link}>
                        <a href={item.href}>{item.name}</a>
                    </div>
                </div>
    });

    return (
            <div className={styles.friends}>
                <div className={styles.container}>
                    {friends}
                </div>
            </div>
    )
}

export default Friends
