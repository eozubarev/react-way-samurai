import React from 'react';
import { connect } from 'react-redux';
import { Navigate} from 'react-router-dom';
import { login } from '../../Redux/reducers/auth-reducer';
import LoginReduxForm from './Login-form/LoginForm.js'


const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to="/profile" replace />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
