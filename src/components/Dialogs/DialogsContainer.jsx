import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// Настраивает св-ва которые мы возьмём (в props)
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        messages: state.messages,
        newMessageBody: state.newMessagesBody,
    }
}

// Кладём колбэки, которые придут к компоненте. Вызовет dispatch у Store и автоматичесски его забайндит bind()
let mapDispatchToProps = (dispatch) => {
    return {
        newMessage: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
