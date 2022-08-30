import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                component='textarea'
                name='newMessagesBody'
                placeholder='Enter your message'>
            </Field>
            <button>Send</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageReduxForm;