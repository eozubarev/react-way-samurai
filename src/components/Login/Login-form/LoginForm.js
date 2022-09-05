import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Element } from '../../common/FormControls/FormControls';
import { maxLenghtCreator, required } from '../../utils/validators/validators';

const Input = Element("input")
const maxLength50 = maxLenghtCreator(50);

const LoginForm = (props) => {
  return (
    
      <form onSubmit={props.handleSubmit} action="">
        <div>
          <Field validate={[required, maxLength50]} placeholder={'E-mail'} name={"email"} type={"text"} component={Input} />
        </div>
        <div>
          <Field validate={[required, maxLength50]} placeholder={'Password'} name={"password"} type={"password"} component={Input} />
        </div>
        <div>
          <Field component={Input} name={"rememberMe"} type={"checkbox"} /> Remember Me
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    
  )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)

export default LoginReduxForm