import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
                component='textarea'
                name='newPostText'
                placeholder='Enter your message'>
            </Field>
            <button>Add Post</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm'})(AddNewPostForm);

export default AddNewPostReduxForm;
