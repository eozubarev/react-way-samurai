import React from 'react';
import { sendMessageCreator } from '../../Redux/reducers/dialogs-reducer';
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
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}

export default compose(
                        connect(mapStateToProps, mapDispatchToProps),
                        withAuthRedirect
                      )(Dialogs)
