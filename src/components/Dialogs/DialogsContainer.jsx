import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessagesBody = state.newMessagesBody;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let newMessage = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (<Dialogs messages={state.messages} 
                     dialogs={state.dialogs} 
                     sendMessage={sendMessage} 
                     newMessage={newMessage} 
                     newMessageBody={newMessagesBody}  
                />)
}

export default DialogsContainer;