import React from 'react'
import { NavLink } from 'react-router-dom'
import Friends from '../Sidebar/Friends/Friends'
import styles from './Navbar.module.scss'

const Navbar = (props) => {
  return (
    <nav className={styles.container}>
        <div>
            <NavLink to="/profile" className = { navData => navData.isActive ? styles.active : styles.item }>
                Profile
            </NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? styles.active : styles.item }>
                Dialogs
            </NavLink>
        </div>
        <div>
            <NavLink to="/messages" className = { navData => navData.isActive ? styles.active : styles.item }>
                Messages
            </NavLink>
        </div>
        <div>
            <NavLink to="/news" className = { navData => navData.isActive ? styles.active : styles.item }>
                News
            </NavLink>
        </div>
        <div>
            <NavLink to="/music" className = { navData => navData.isActive ? styles.active : styles.item }>
                Music
            </NavLink>
        </div>
        <div>
            <NavLink to="/settings" className = { navData => navData.isActive ? styles.active : styles.item }>
                Settings
            </NavLink>
        </div>
        <div>
            <div className={styles.sidebar}>Friends:</div>
            <Friends state={props.state.sidebar} />
        </div>
    </nav>
  )
}

export default Navbar