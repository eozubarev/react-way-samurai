import React, { Component } from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

class Dialogs extends Component {

    dialogsElements = this.props.dialogs.map((item, index) => {
        return <DialogItem key={index} name={item.name} id={item.id}/>
    });

    messagesElements = this.props.messages.map((item, index) => {
        return <Message key={index} message={item.message} id={item.id}/>
    });

    onSendMessageClick = () => {
        this.props.sendMessage()
    }

    onNewMessageChange = (e) => {
        let body = e.target.value;
        this.props.newMessage(body)
    }

    render() {
        return (
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {this.dialogsElements}
                </div>
                <div className={styles.messages}>
                    <div>
                        {this.messagesElements}
                    </div>
                    <div>
                        <div>
                            <textarea 
                                value={this.props.newMessagesBody} 
                                onChange={this.onNewMessageChange}
                                placeholder='Enter your message'></textarea>
                        </div>
                        <div>
                            <button onClick={this.onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialogs;
