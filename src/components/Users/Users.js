import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Users.module.scss'
import userPhoto from '../../images/users/default.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) 
    let pages = []; 
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); 
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);

    return (
        <div>
            <div>
                {slicedPages.map((page, index) => {
                return (
                    <span
                        key={index}
                        onClick={ (e) => { props.onPageChanged(page) } }
                        className={
                            props.currentPage === page
                            ? styles.selectedPage
                            : styles.page
                        } > {page} </span>
                );
                })}
            </div>
            <div>
            {props.users.map((user) => {
                return ( <div className={styles.users} key={user.id}>
                    <div className={styles.container}>
                        <div className={styles.start}>
                        <div className={styles.avatar}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={ user.photos.small != null ? user.photos.small : userPhoto } alt="Аватар пользователя" />
                            </NavLink>                            
                        </div>
                        <div className={styles.followed}>
                            {user.followed ? (
                            <button
                                onClick={ () => { props.unfollow(user.id) } }
                            >
                                Unfollow
                            </button>
                            ) : (
                            <button
                                onClick={ () => { props.follow(user.id) } }
                            >
                                Follow
                            </button>
                            )}
                        </div>
                        </div>
                        <div className={styles.middle}>
                        <div className={styles.name}>{user.name}</div>
                        <div className={styles.status}>{user.status}</div>
                        </div>
                        <div className={styles.end}>
                        <div className={styles.location}>
                            <span>{"user.location.city"}</span>,&nbsp;
                            <span>{"user.location.country"}</span>
                        </div>
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
      </div>
    )

};

export default Users