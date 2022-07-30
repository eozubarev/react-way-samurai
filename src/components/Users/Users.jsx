import React, { Component } from 'react';
import styles from './Users.module.scss'
import * as axios from 'axios';
import userPhoto from '../../images/users/default.png';


class Users extends Component {

    constructor () {
        alert('new obj')
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => { 
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => {
                        return <div className={styles.users} key={user.id}>
                            <div className={styles.container}>
                                <div className={styles.start}>
                                    <div className={styles.avatar}>
                                        <a href="#">
                                            <img src={ user.photos.small != null ? user.photos.small : userPhoto} alt="Аватар пользователя" />
                                        </a>
                                    </div>
                                    <div className={styles.followed}>
                                        { user.followed 
                                            ? <button onClick={ () => {this.props.unfollow(user.id)}  }>Unfollow</button> 
                                            : <button onClick={ () => {this.props.follow(user.id)}  }>Follow</button> }
                                    </div>
                                </div>
                                <div className={styles.middle}>
                                    <div className={styles.name}>
                                        {user.name}
                                    </div>
                                    <div className={styles.status}>
                                        {user.status}
                                    </div>
                                </div>
                                <div className={styles.end}>
                                    <div className={styles.location}>
                                        <span>{"user.location.city"}</span>,&nbsp;
                                        <span>{"user.location.country"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Users;
