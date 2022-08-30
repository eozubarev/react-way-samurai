import React, { Component } from 'react';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import AddMessageReduxForm from './AddMessageForm/AddMessageForm';

class Dialogs extends Component {

    dialogsElements = this.props.dialogs.map((item, index) => {
        return <DialogItem key={index} name={item.name} id={item.id}/>
    });

    messagesElements = this.props.messages.map((item, index) => {
        return <Message key={index} message={item.message} id={item.id}/>
    });

    addNewMessage = (values) => {
        this.props.sendMessage(values.newMessageBody)
    }

    render() {

        if (!this.props.isAuth) return <Navigate to={"/login"} /> 

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
                            <AddMessageReduxForm onSubmit={this.addNewMessage} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialogs;
