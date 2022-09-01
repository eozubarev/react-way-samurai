import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Element } from '../../common/FormControls/FormControls';
import { maxLenghtCreator, required } from '../../utils/validators/validators';

const Input = Element("input")
const maxLength10 = maxLenghtCreator(10);

const LoginForm = (props) => {
  return (
    
      <form onSubmit={props.handleSubmit} action="">
        <div>
          <Field validate={[required, maxLength10]} placeholder={'Login'} name={"login"} type={"text"} component={Input} />
        </div>
        <div>
          <Field validate={[required, maxLength10]} placeholder={'Password'} name={"password"} type={"text"} component={Input} />
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