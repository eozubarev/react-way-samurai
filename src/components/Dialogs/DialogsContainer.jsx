import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

// Настраивает св-ва которые мы возьмём (в props)
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessagesBody,
    }
}

// Кладём колбэки, которые придут к компоненте. Вызовет dispatch у Store и автоматичесски его забайндит bind()
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        newMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export default compose(
                        connect(mapStateToProps, mapDispatchToProps),
                        withAuthRedirect
                      )(Dialogs)
