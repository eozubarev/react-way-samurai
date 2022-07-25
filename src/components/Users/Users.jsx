import React from 'react'
import styles from './Users.module.scss'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Alexey V.',
                avatarUrl: 'https://differed.ru/wp-content/uploads/2020/04/kachestva-nastoyashhego-muzhchiny_3.jpg',
                status: 'i am busy',
                location: {city: 'Minsk', country: 'Belarus'},
            },
            {
                id: 2,
                followed: true,
                avatarUrl: 'https://proprikol.ru/wp-content/uploads/2020/03/kartinki-devushki-v-shlyape-1.jpg',
                fullName: 'Anna P.',
                status: 'Hello how are you?',
                location: {city: 'Moscow', country: 'Russia'},
            },
            {
                id: 3,
                followed: true,
                avatarUrl: 'https://www.de-online.ru/_nw/3/34464882.jpg',
                fullName: 'Till S.',
                status: 'Deatchland nice',
                location: {city: 'Berlin', country: 'Germany'},
            },
        ])
    }


    let users = props.users.map(user => {
        return <div className={styles.users} key={user.id}>
                    <div className={styles.container}>
                        <div className={styles.start}>
                            <div className={styles.avatar}>
                                <a href="#">
                                    <img src={user.avatarUrl} alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className={styles.followed}>
                                { user.followed 
                                    ? <button onClick={ () => {props.unfollow(user.id)}  }>Unfollow</button> 
                                    : <button onClick={ () => {props.follow(user.id)}  }>Follow</button> }
                            </div>
                        </div>
                        <div className={styles.middle}>
                            <div className={styles.name}>
                                {user.fullName}
                            </div>
                            <div className={styles.status}>
                                {user.status}
                            </div>
                        </div>
                        <div className={styles.end}>
                            <div className={styles.location}>
                                <span>{user.location.city}</span>,&nbsp;
                                <span>{user.location.country}</span>
                            </div>
                        </div>
                    </div>
                </div>
    });

    return (
            <div>
                {users}
            </div>
    )
    
}

export default Users
