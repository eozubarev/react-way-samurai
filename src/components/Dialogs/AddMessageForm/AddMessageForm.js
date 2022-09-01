import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../../common/FormControls/FormControls';
import { maxLenghtCreator, required } from '../../utils/validators/validators';


const maxLength10 = maxLenghtCreator(10);
const Textarea = Element("textarea");

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                component={Textarea}
                name='newMessagesBody'
                validate={[required, maxLength10]}
                placeholder='Enter your message'>
            </Field>
            <button>Send</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm'})(AddMessageForm);

export default AddMessageReduxForm;