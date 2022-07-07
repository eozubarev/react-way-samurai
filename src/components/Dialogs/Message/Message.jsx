import React from 'react';
import styles from './Message.module.scss'

const Message = (props) => {
    return (
        <div className={`${styles.message}  ${styles.active}`}>{props.message}</div>
    )
}

export default Message;