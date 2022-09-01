import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Element } from '../../../common/FormControls/FormControls';
import { maxLenghtCreator, required } from '../../../utils/validators/validators';

const maxLength10 = maxLenghtCreator(10);
const Textarea = Element("textarea")

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                component={Textarea}
                name='newPostText'
                validate={[required, maxLength10]}
                placeholder='Enter your message'>
            </Field>
            <button>Add Post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm'})(AddNewPostForm);

export default AddNewPostReduxForm;
