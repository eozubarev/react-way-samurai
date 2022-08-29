import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    
      <form onSubmit={props.handleSubmit} action="">
        <div>
          <Field placeholder={'Login'} name={"login"} type={"text"} component={"input"} />
        </div>
        <div>
          <Field placeholder={'Password'} name={"password"} type={"text"} component={"input"} />
        </div>
        <div>
          <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> Remember Me
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    
  )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)

export default LoginReduxForm