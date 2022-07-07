import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(item => {
        return <DialogItem key={item.id} name={item.name} id={item.id}/>
    });

    let messagesElements = props.state.messages.map(item => {
        return <Message key={item.id} message={item.message} id={item.id}/>
    });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;