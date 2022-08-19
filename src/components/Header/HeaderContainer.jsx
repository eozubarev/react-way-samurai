import React, { Component } from 'react';
import Header from './Header';
import { authMe, setAuthUserData } from '../../Redux/reducers/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class HeaderContainer extends Component {

  componentDidMount () {
    this.props.authMe();
  }

  render() {
    return (
      <>
        <Header {...this.props}  />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default compose(
                        connect(mapStateToProps, {setAuthUserData, authMe})
                      )(HeaderContainer)

// export default connect(mapStateToProps, {setAuthUserData, authMe})(HeaderContainer);
