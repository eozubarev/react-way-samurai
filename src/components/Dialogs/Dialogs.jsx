import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/reducers/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(item => {
        return <DialogItem key={item.id} name={item.name} id={item.id}/>
    });

    let messagesElements = state.messages.map(item => {
        return <Message key={item.id} message={item.message} id={item.id}/>
    });

    let newMessagesBody = state.newMessagesBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let messageBody = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(messageBody));
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea 
                            value={newMessagesBody} 
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;