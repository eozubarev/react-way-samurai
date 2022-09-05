import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = (props) => {
  return (
    <header className='header'>
        <div className={styles.loginBlock}>
          <div className={styles.loginBlockItem}>
            { 
              props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <div><NavLink className={styles.loginBlockLink} to={'/login'}>Зарегистрироваться</NavLink></div>
            }
          </div>
        </div>
    </header>
  )
}

export default Header